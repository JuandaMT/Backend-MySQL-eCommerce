"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Product 1",
        price: 4500,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 2",
        price: 5500,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 3",
        price: 3500,
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 4",
        price: 6500,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Product 5",
        price: 2500,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
