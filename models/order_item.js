module.exports = (sequelize, Datatypes) => {
  const order_item = sequelize.define(
    "order_item",
    {
      order_item_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
      },
      item_id: {
        type: Datatypes.INTEGER,
      },
      item_qty: {
        type: Datatypes.INTEGER,
      },
      unit_price: {
        type: Datatypes.FLOAT,
      },
      order_id: {
        type: Datatypes.INTEGER,
      },
    },
    {
      tableName: "order_item",
      timestamps: false,
    }
  );
  order_item.associate = (models) => {
    order_item.hasMany(models.order, {
      foreignKey: "customer_id",
    });
  };

  return order_item;
};
