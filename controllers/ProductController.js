const { Product, Category, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const ProductController = {
  create(req, res, next) {
    Product.create(req.body)
      .then((Product) =>
        res
          .status(201)
          .send({ message: "Product successfully created", Product })
      )
      .catch(error=>next(error));
  },
  update(req, res) {
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send("Product successfully updated");
      })
      .catch((error) => {
        res.status(500).send("Product wont updated");
      });
  },
  delete(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send("Product successfully deleted");
      })
      .catch((error) => {
        res.send("Product wont deleted");
      });
  },
  getAll(req, res) {
    Product.findAll({
      include: [Category],
    })

      .then((Product) => res.send(Product))

      .catch((err) => {
        console.log(err);

        res.status(500).send({
          message: "Cannot found the products",
        });
      });
  },
  getById(req, res) {
    Product.findByPk(req.params.id, {
      include: [Category],
    })
      .then((Product) => res.send(Product))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Cannot found the Product",
        });
      });
  },
  getOneByName(req, res) {
    Product.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },

      include: [Category],
    })
      .then((Product) => res.send(Product))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Cannot found the Product",
        });
      });
  },
  getByPrice(req, res) {
    Product.findOne({
      where: {
        price: {
          [Op.like]: req.params.price,
        },
      },
      include: [Category],
    })

      .then((Product) => res.send(Product))

      .catch((err) => {
        console.log(err);

        res.status(500).send({
          message: "Cannot found the products",
        });
      });
  },
  orderByPrice(req, res) {
    Product.findAll({
      order: [["price", "DESC"]],
      include: [Category],
    })
      .then((Product) => res.send(Product))
      .catch((err) => {
        console.log(err);

        res.status(500).send({
          message: "Cannot found the products",
        });
      });
  },
};
module.exports = ProductController;
