const category = require("../models/category.js");
const { Category, Product, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const CategoryController = {
  create(req, res) {
    //CREAR UNA CATEGORÍA
    Category.create(req.body)
      .then((Category) =>
        res
          .status(201)
          .send({ message: "Category created successfully", Category })
      )
      .catch(console.error);
  },
  //ACTUALIZAR UNA CATEGORIA
  update(req, res) {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send("Category successfully updated");
      })
      .catch((error) => {
        res.status(500).send("Category wont updated");
      });
  },
  /* ELIMINAR UNA CATEGORIA */
  delete(req, res) {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.send("Category successfully deleted");
      })
      .catch((error) => {
        res.send("Category wont deleted");
      });
  },
  /* CATEGORIAS + PRODUCTOS */
  getAll(req, res) {
    Category.findAll({
      include: [Product],
    })

      .then((category) => res.send(category))

      .catch((err) => {
        console.log(err);

        res.status(500).send({
          message: "Cannot found the products",
        });
      });
  },
  /* TRAER CATEGORIA POR ID */
  getById(req, res) {
    Category.findByPk(req.params.id, {
      include: [Product],
    })
      .then((Category) => res.send(Category))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Cannot found the category",
        });
      });
  },
  /* TRAER CATEGORIA POR NOMBRE */
  getOneByName(req, res) {
    Category.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },

      include: [Product],
    })
      .then((Category) => res.send(Category))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Cannot found the category",
        });
      });
  },
};
module.exports = CategoryController;
