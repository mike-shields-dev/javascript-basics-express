const express = require('express');
const strings = require('./routes/strings');
const numbers = require('./routes/numbers');
const booleans = require('./routes/booleans');
const arrays = require('./routes/arrays');

const app = express();

app.use(express.json());
app.use('/strings', strings);
app.use('/numbers', numbers);
app.use('/booleans', booleans);
app.use('/arrays', arrays);

module.exports = app;
