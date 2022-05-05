const db = require('./db');

module.exports.findUserByCookie = (cookie) => {
  const filter = { cookie };
  return db.findOne(filter);
};

module.exports.findRecipeAndUpdate = (recipe) => {
  const filter = { name: recipe.name };
  return db.findOneAndUpdate(filter, recipe, { upsert: true });
};

module.exports.createNewRecipe = (recipe) => (db.create(recipe));
