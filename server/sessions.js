/* eslint-disable no-console */
const { v4: uuid } = require('uuid');
const db = require('./db').User;

module.exports = (req, res, next) => {
  if (!req.cookies['recipe-resizer']) {
    // if no cookie, set one, if there is a cookie, then search for recipes associated
    // db.create
    // res.cookie('recipe-resizer', )
  } else {
    const cookie = uuid();
    db.create({ user: '', cookie })
      .then(() => {
        // Send cookie to user
        res.cookie('recipe-resizer', cookie);
      })
      .catch((err) => {
        console.log('Error creating user:', err);
      });
  }
  next();
};
