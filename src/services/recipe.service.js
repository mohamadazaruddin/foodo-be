const db = require("../models");
const Recipe = db.Recipe;

// to get all the recipes
const getAllrecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    if (!recipes) {
      return res.status(204).json({ message: "No Recipe Found" });
    }
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// to get the recipe
const getrecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findByPk(req.params.id);
    if (!recipes) {
      return res.status(204).json({ message: "No Recipe Found" });
    }
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// to Add recipes
const addRecipe = async (req, res) => {
  try {
    const { recipeName, description, category, ingredients, rating } = req.body;
    console.log(req.body, "body");
    const users = await User.findByPk(req.params.id);
    if (!users) {
      return res.status(204).json({ message: "No User Found" });
    }
    console.log("loh");
    const recipe = await Recipe.create({
      users,
      recipeName,
      description,
      category,
      ingredients,
      rating,
    });
    return res
      .status(200)
      .json({ message: "User Registered Successfully", recipe });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

// to update recipes
const updateRecipe = (req, res) => {
  res.send({ message: "hello recipe" });
};

// to delete recipe
const deleteRecipe = (req, res) => {
  res.send({ message: "hello recipe" });
};

module.exports = {
  getAllrecipes,
  getrecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
