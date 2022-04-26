module.exports = (sequelize, Datatypes) => {
  const customer = sequelize.define(
    "customer",
    {
      customer_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
      },
      customer_name: {
        type: Datatypes.STRING,
      },
    },
    {
      tableName: "customer",
      timestamps: false,
    }
  );
  customer.associate = (models) => {
    customer.hasMany(models.order, {
      foreignKey: "customer_id",
    });
  };

  return customer;
};
