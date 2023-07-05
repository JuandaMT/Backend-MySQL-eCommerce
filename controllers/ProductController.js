const { Product, Category, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;
const ProductController = {
    //CREAR UN PRODUCTO
    create(req, res){
        Product.create(req.body)
        .then(Product => res.status(201).send({message: 'Product created successfully', Product}))
        .catch(console.error)
    },
    //ACTUALIZAR UN PRODUCTO
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
  /* ELIMINAR UN PRODUCTO */
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
  /* PRODUCTOS + CATEGORIAS */
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
  /* TRAER PRODUCTO POR ID */
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
  /* TRAER PRODUCTO POR NOMBRE */
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
}
module.exports = ProductController