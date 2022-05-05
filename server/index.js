/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const sessionHandler = require('./sessions');
const db = require('./models');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser('Pizza'));
app.use(sessionHandler);
app.use(express.static('dist'));

app.post('/recipe', (req, res) => {
  console.log('Incoming recipe:', req.body);
  db.findRecipeAndUpdate(req.body)
    .then((result) => {
      console.log('\nSaved:\n', result);
      res.send('done');
    })
    .catch((err) => {
      console.log('Error posting recipe:', err);
      res.status(500).send('failed');
    });
});

app.listen(port);
console.log('App listening on port:', port);
