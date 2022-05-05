const db = require('./db');

module.exports.findRecipeAndUpdate = (recipe) => {
  const filter = recipe.name;
  return db.findOneAndUpdate(filter, recipe, { upsert: true });
};
