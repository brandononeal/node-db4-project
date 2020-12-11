const express = require("express");
const router = express.Router();

const Recipe = require("./recipe-model");

router.get("/", async (req, res) => {
  try {
    const data = await Recipe.getRecipes();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then((ingredients) => {
      if (ingredients.length) {
        res.json(ingredients);
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingredients for given recipe" });
      }
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipe.getInstructions(id)
    .then((instructions) => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res
          .status(404)
          .json({ message: "Could not find instructions for given recipe" });
      }
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
