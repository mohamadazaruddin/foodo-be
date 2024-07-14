const {
  getUser,
  getAllUser,
  createUser,
  login,
} = require("../services/user.service");

exports.getUser = (req, res) => {
  getUser(req, res);
};

exports.getAllUser = (req, res) => {
  getAllUser(req, res);
};

exports.createUser = (req, res) => {
  createUser(req, res);
};

exports.login = (req, res) => {
  login(req, res);
};
