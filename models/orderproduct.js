"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Product, { through: "OrderProducts" });
      Product.belongsToMany(models.Order, { through: "OrderProducts" });
    }
  }
  OrderProduct.init(
    {
      ProductId: DataTypes.INTEGER,
      OrderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderProduct",
    }
  );
  return OrderProduct;
};
