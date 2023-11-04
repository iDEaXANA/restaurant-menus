const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Menu model
Menu.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Menu",
  }
);

module.exports = { Menu };
