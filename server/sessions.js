/* eslint-disable no-console */
const { v4: uuid } = require('uuid');
const db = require('./models');

// Upon joining a new recipe/user is created

module.exports = (req, res, next) => {
  if (req.cookies['recipe-resizer']) {
    // if no cookie, set one, if there is a cookie, then search for recipes associated
    // db.create
    // res.cookie('recipe-resizer', )
    const cookie = req.cookies['recipe-resizer'];
    console.log('[session] found cookie:', cookie);
    db.findUserByCookie(cookie)
      .then((result) => {
        if (!result) {
          console.log('[session] no recipes found for:', cookie);
        } else {
          console.log('[session] found recipe for:', result);
        }
      })
      .catch((err) => {
        console.log('[session] error finding cookie in db:', err);
      });
  } else {
    // Hold off on automatic creation. Lets do this on save click!
    const cookie = uuid();
    console.log('[session] new user, generating cookie:', cookie);
    res.cookie('recipe-resizer', cookie);
    // db.createNewRecipe({ user: '', cookie })
    //   .then(() => {
    //     // Send cookie to user
    //     res.cookie('recipe-resizer', cookie);
    //     console.log('[session] recipe created, cookie sent');
    //   })
    //   .catch((err) => {
    //     console.log('Error creating user:', err);
    //   });
  }
  next();
};
