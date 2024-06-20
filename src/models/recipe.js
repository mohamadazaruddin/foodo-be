// models/recipe.js
const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Recipe = sequelize.define("recipe", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: User,
    //     key: "id",
    //   },
    // },
  });
  Recipe.associate = function (models) {
    Recipe.belongsTo(models.User);
  };
  return Recipe;
};
