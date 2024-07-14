const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
const auth = require("../middleware/auth");
//  get all recipe

router.get("/", auth, recipeController.getAllrecipes);
router.get("/:id", auth, recipeController.getrecipe);
router.post("/:id", auth, recipeController.addRecipe);
router.put("/:id", auth, recipeController.updateRecipe);
router.delete("/:id", auth, recipeController.deleteRecipe);

module.exports = router;
