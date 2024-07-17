const db = require("../models");
const Recipe = db.Recipe;
const User = db.User;
// to get all the recipes
const getAllrecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: {
        model: User,
        attributes: ["uuid", "username", "email"], // Specify the user attributes you want to include
      },
    });
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
    const recipes = await Recipe.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ["uuid", "username", "email"], // Specify the user attributes you want to include
      },
    });
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

    const users = await User.findByPk(req.params.id);
    if (!users) {
      return res.status(204).json({ message: "No User Found" });
    }
    const newRecipe = {
      user_id: req.params.id,
      recipeName: recipeName,
      description: description,
      category: category,
      ingredients: ingredients,
      rating: rating,
    };

    const recipe = await Recipe.create(newRecipe);
    return res
      .status(200)
      .json({ message: "User Registered Successfully", recipe });
  } catch (error) {
    console.log(error, "err");
    return res.status(500).json({ message: "Server Error" });
  }
};

// to update recipes
const updateRecipe = async (req, res) => {
  try {
    const { recipe_id } = req.params;
    const { recipeName, description, category, ingredients, rating } = req.body;

    const recipe = await Recipe.findByPk(recipe_id);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    const updateRecipe = {
      recipeName: recipeName,
      description: description,
      category: category,
      ingredients: ingredients,
      rating: rating,
    };
    await recipe.update(updateRecipe);

    res.status(200).json({ message: "Recipe updated successfully", recipe });
  } catch (error) {
    console.error("Error updating recipe:", error);
    res.status(500).json({ error: "Failed to update recipe" });
  }
};

// to delete recipe
const deleteRecipe = async (req, res) => {
  try {
    const { recipe_id } = req.params;

    const recipe = await Recipe.findByPk(recipe_id);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await recipe.destroy();
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ error: "Failed to delete recipe" });
  }
};

const getUserRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: { user_id: req.params.id },
      include: {
        model: User,
        attributes: ["uuid", "username", "email"], // Specify the user attributes you want to include
      },
    });

    res.status(200).json({ recipes });
  } catch (error) {
    console.error("Error fetching user recipes:", error);
    res.status(500).json({ error: "Failed to fetch user recipes" });
  }
};

module.exports = {
  getAllrecipes,
  getrecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getUserRecipe,
};
