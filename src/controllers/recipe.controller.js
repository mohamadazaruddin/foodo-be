const {
  getAllrecipes,
  getrecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getUserRecipe,
} = require("../services/recipe.service");

exports.getAllrecipes = (req, res) => {
  getAllrecipes(req, res);
};
exports.getrecipe = (req, res) => {
  getrecipe(req, res);
};
exports.addRecipe = (req, res) => {
  addRecipe(req, res);
};
exports.updateRecipe = (req, res) => {
  updateRecipe(req, res);
};
exports.deleteRecipe = (req, res) => {
  deleteRecipe(req, res);
};
exports.getUserRecipe = (req, res) => {
  getUserRecipe(req, res);
};
