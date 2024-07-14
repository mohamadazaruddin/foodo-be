const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");
//  get all recipe
router.get("/", auth, userController.getAllUser);
router.get("/:id", auth, userController.getUser);
router.post("/register", userController.createUser);
router.post("/login", userController.login);

module.exports = router;
