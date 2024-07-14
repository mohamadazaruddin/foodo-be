// const User = require("../models/user");
const db = require("../models");
const bcrypt = require("bcrypt");
const User = db.User;
const jwt = require("jsonwebtoken");

// get user by uuid
const getUser = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.id);
    if (!users) {
      return res.status(204).json({ message: "No User Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// get all user present in app
const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users.length) {
      return res.status(204).json({ message: "No User Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// register new User
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res
      .status(200)
      .json({ message: "User Registered Successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// login with new user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_OR_KEY, {
      expiresIn: process.env.JWT_EXPIRE_TIME,
    });

    const loggedInuser = {
      email: user.email,
      uuid: user.uuid,
      username: user.username,
    };

    return res.json({ token, loggedInuser });
  } catch (error) {
    console.error("Error logging in: ", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getUser, getAllUser, createUser, login };
