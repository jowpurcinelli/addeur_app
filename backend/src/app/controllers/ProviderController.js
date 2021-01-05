import User from '../models/User';

class ProviderController {
  async index(req, res) {
    const provider = await User.findAll({

    });
  }
}
export default new ProviderController();
