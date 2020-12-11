const express = require("express");
const server = express();

const RecipeRouter = require("./recipes/recipe-router");

server.use(express.json());
server.use("/api/recipes", RecipeRouter);

module.exports = server;
