const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "User", tableName: "users" }
  );
  return User;
};
