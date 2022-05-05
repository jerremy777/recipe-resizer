const db = require('./db');

module.exports.findUserByCookie = (cookie) => {
  const filter = { cookie };
  return db.findOne(cookie);
};

module.exports.findRecipeAndUpdate = (recipe) => {
  const filter = { name: recipe.name };
  return db.findOneAndUpdate(filter, recipe, { upsert: true });
};
