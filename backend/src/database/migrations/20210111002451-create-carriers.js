module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carriers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      is_verified: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      avatar: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      national_id: {
        type: Sequelize.STRING,
      },
      id_front: {
        type: Sequelize.STRING,
      },
      id_back: {
        type: Sequelize.STRING,
      },
      collected_points: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      coupon: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('carriers');
  },
};
