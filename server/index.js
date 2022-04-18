require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + '../dist'));

// app.get('/', (req, res) => {
//   console.log('request from:', req.url);
//   res.send('ok');
// });


app.listen(port);
console.log('App listening on port:', port);
console.log(__dirname + '../dist');
