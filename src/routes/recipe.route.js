const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
const auth = require("../middleware/auth");
//  get all recipe

router.get("/recipe/", auth, recipeController.getAllrecipes);
router.get("/recipe/:id", auth, recipeController.getrecipe);
router.get("/recipe/user/:id", auth, recipeController.getUserRecipe);
router.post("/recipe/:id", auth, recipeController.addRecipe);
router.put("/recipe/:recipe_id", auth, recipeController.updateRecipe);
router.delete("/recipe/:recipe_id", auth, recipeController.deleteRecipe);

module.exports = router;
