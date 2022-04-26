const { sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");

exports.getResult = async (req, res, next) => {
  try {
    const result = await sequelize.query(
      `SELECT order_no, customer_name, sum(unit_price*item_qty) AS ยอดรวมสินค้า FROM order_ a JOIN customer b JOIN order_item c ON a.customer_id = b.customer_id AND a.order_id = c.order_id GROUP BY customer_name`,
      { type: QueryTypes.SELECT }
    );

    // const order = await db.order.findAll();
    // const order_item = await db.order_item.findAll();
    // const customer = await db.customer.findAll();

    console.log(result);
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// const result = await sequelize.query(
//   `SELECT order_no, customer_name, sum(unit_price*item_qty) AS ยอดรวมสินค้า FROM order_ a JOIN customer b JOIN order_item c ON a.customer_id = b.customer_id AND a.order_id = c.order_id GROUP BY customer_name`,
//   { type: QueryTypes.SELECT }
// );
