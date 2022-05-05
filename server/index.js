/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const db = require('./models');

const app = express();
const port = process.env.PORT;

app.use(express.static('dist'));
app.use(express.json());

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

app.get('/recipe')

app.listen(port);
console.log('App listening on port:', port);
