const { Category } = require("../models/index.js");

const CategoryController = {
  create(req, res) {
    req.body.role = "Category";
    Category.create(req.body)
      .then((Category) =>
        res
          .status(201)
          .send({ message: "Category created successfully", Category })
      )
      .catch(console.error);
  }, //CAMBIAR POR LA OTRA FORMA
 async update(req, res) {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.send("Usuario actualizado con éxito");
  },
};
module.exports = CategoryController;
