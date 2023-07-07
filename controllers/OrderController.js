const { Order, Product } = require("../models/index.js");

const OrderController = {
  create(req, res) {
    Order.create(req.body)
      .then(
        (Order) => Order.addProduct(req.body.ProductId),
        res.status(201).send({ message: "Order created successfully", Order })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    Order.findAll({
      include: [{ model: Product, through: { attributes: [] } }],
    })

      .then((Order) => res.send(Order))

      .catch((err) => {
        console.log(err);

        res.status(500).send({
          message: "Cannot found the products",
        });
      });
  },
};
module.exports = OrderController;
