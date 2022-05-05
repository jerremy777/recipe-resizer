/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI)
  .then(
    () => { console.log('[database] connected'); },
    (err) => { console.log('[database] error on connect:', err); },
  );

const recipeSchema = new mongoose.Schema({
  user: String,
  secret: String,
  cookie: String,
  name: String,
  recipe: [{
    ingredient: String,
    amount: Number,
    unit: String,
  }],
  directions: String,
});

const userSchema = new mongoose.Schema({
  cookie: String,
  username: String,
  password: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const User = mongoose.model('User', userSchema);

module.exports.Recipe = Recipe;
module.exports.User = User;
