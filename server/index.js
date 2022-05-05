/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT;

app.use(express.static('dist'));

app.listen(port);
console.log('App listening on port:', port);
