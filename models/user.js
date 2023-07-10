"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order);
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your name",
          },
        },
      },

      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,

        allowNull: false,

        validate: {
          notNull: {
            msg: "Please insert your email",
          },

          isEmail: {
            msg: "Please insert a valid email",
          },
        },
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
