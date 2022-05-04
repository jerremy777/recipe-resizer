require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);

const recipeSchema = new mongoose.Schema({
  email: String,
  secret: String,
  recipe: [{
    ingredient: String,
    amount: Number,
    unit: String,
  }],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
