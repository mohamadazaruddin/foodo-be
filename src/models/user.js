const { Sequelize, DataTypes } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  });
  User.associate = function (models) {
    User.hasMany(sequelize.define("recipe"));
  };
  return User;
};
