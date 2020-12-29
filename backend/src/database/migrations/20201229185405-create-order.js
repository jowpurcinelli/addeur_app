module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      carrier_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        autoIncrement: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};

/*
            $table->uuid('id')->primary();
            $table->uuid('carrier_id');
            $table->foreign('carrier_id')->references('id')->on('carriers')->onDelete('cascade');
            $table->uuid('customer_id');
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->uuid('truck_id');
            $table->foreign('truck_id')->references('id')->on('trucks')->onDelete('cascade');
            $table->string('booking_id')->nullable();
            $table->string('pickup_location')->nullable();
            $table->string('drop_location')->nullable();
            $table->longText('addition_notes')->nullable();
            $table->string('truck_requirements')->nullable();
            $table->string('recipient_name')->nullable();
            $table->string('recipient_contact')->nullable();
            $table->string('product_category_id')->nullable();
            $table->string('product_type_id')->nullable();
            $table->string('product_weight')->nullable();
            $table->string('product_height')->nullable();
            $table->string('product_width')->nullable();
            $table->string('product_depth')->nullable();
            $table->string('package_style_id')->nullable();
            $table->string('product_value')->nullable();
            $table->string('carrying_Way')->nullable();
            $table->string('tip')->nullable();
            $table->string('start_date')->nullable();
            $table->string('estimated_arrival')->nullable();
            $table->string('cost')->nullable();
            $table->string('order_status')->nullable();
            $table->string('truck_front_pic')->nullable();
            $table->string('truck_back_pic')->nullable();
            $table->string('truck_right_pic')->nullable();
            $table->string('truck_left_pic')->nullable();
            $table->string('goods_image_1')->nullable();
            $table->string('goods_image_2')->nullable();
            $table->double('rating')->nullable();
            $table->string('rating_comment')->nullable();

            $table->softDeletes();
            $table->timestamps();
*/
