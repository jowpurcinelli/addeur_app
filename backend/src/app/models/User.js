import Sequelize, { Model } from 'sequelize';
import bkrypt from 'bkryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      phone_number: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
    },
    {
      sequelize,

    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 4);
      }
    });
  }
}
export default User;
