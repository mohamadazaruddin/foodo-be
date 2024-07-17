const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");
//  get all recipe
router.get("/user/", auth, userController.getAllUser);
router.get("/user/:id", auth, userController.getUser);
router.post("/user/register", userController.createUser);
router.post("/user/login", userController.login);

module.exports = router;
