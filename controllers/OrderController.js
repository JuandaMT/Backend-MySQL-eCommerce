const { Order, Product } = require('../models/index.js');

const OrderController = {
    getAll(req, res) {
        Order.findAll({
          include: [Product],
        })
    
          .then((Order) => res.send(Order))
    
          .catch((err) => {
            console.log(err);
    
            res.status(500).send({
              message: "Cannot found the products",
            });
          });
      },
}
module.exports = OrderController