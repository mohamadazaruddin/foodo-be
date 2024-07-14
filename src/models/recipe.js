const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.User, {
        foreignKey: "user_id", // This should match the column name in NoteTable
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Recipe.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "uuid",
        },
      },
      RecipeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    { sequelize, modelName: "Recipe", tableName: "recipes" }
  );
  return Recipe;
};
