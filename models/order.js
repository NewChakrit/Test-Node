module.exports = (sequelize, Datatypes) => {
  const order = sequelize.define(
    "order",
    {
      order_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
      },
      order_no: {
        type: Datatypes.STRING,
      },
      customer_id: {
        type: Datatypes.INTEGER,
      },
      order_date: {
        type: Datatypes.DATEONLY,
      },
    },
    {
      tableName: "order_",
      timestamps: false,
    }
  );
  order.associate = (models) => {
    order.belongsTo(models.customer, {
      foreignKey: "customer_id",
    });
    order.hasOne(models.order_item, {
      foreignKey: "order_id",
    });
  };

  return order;
};
