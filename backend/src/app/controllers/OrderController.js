/* eslint-disable class-methods-use-this */
import * as Yup from 'yup';
import {
  startOfHour, parseISO, isBefore, format, subHours,
} from 'date-fns';
import cn from 'date-fns/locale/zh-CN';
import Order from '../models/Order';
import User from '../models/User';
import File from '../models/File';
// import Notification from '../schemas/Notification';
// import CancellationMail from '../jobs/CancellationMail';
// import Queue from '../../lib/Queue';

class OrderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const order = await Order.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      order: ['date'],
      limit: 3,
      offset: (page - 1) * 20,
      attributes: ['id', 'date', 'past', 'cancelable'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });
    return res.json(order);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Valiation fails',
      });
    }

    const { provider_id, date } = req.body;

    /**
     * Provider can't create appointment for itself
     */
    if (provider_id === req.userId) {
      return res
        .status(401)
        .json({ error: 'You can not create appointments for yourself' });
    }

    /**
     * Check if provider_id is a provider
     */
    const checkIsProvider = await User.findOne({
      where: {
        id: provider_id,
        provider: true,
      },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create orders with providers' });
    }

    const hourStart = startOfHour(parseISO(date));

    /**
     * Check for past dates
     */
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past date are not permitted' });
    }

    /**
     * Check date availabity
     */
    const checkAvailabitity = await Order.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailabitity) {
      return res
        .status(400)
        .json({ error: 'Order date is not available' });
    }

    const order = await Order.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    /**
     * Notify appointment provider
     */
    const user = await User.findByPk(req.userId);
    const formattedDate = format(
      hourStart,
      "'day' dd 'm' MMMM', hr H:mm'h'",
      {
        locale: cn,
      },
    );
    await Notification.create({
      content: `New order from ${user.name} for ${formattedDate}`,
      user: provider_id,
    });

    return res.json(order);
  }

  async delete(req, res) {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });

    if (order.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to cancel this order.",
      });
    }

    // removo duas horas da data agendada
    const dateWithSub = subHours(order.date, 2);
    const NOW = new Date();
    if (isBefore(dateWithSub, NOW)) {
      return res.status(401).json({
        error: 'You can only cancel appointment 2 hours in advance.',
      });
    }

    order.canceled_at = NOW;

    await order.save();

    await Queue.add(CancellationMail.key, { order });

    return res.json(order);
  }
}

export default new OrderController();
