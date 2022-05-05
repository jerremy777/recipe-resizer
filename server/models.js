const db = require('./db').Recipe;

module.exports.findRecipeAndUpdate = (recipe) => {
  const filter = recipe.name;
  return db.findOneAndUpdate(filter, recipe, { upsert: true });
};
