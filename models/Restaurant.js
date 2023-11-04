const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Restaurant model
Restaurant.init(
  {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING,
  },
  { sequelize: db, modelName: "Restaurant" }
);
module.exports = { Restaurant };
