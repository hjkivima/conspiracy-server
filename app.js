const express = require('express');
const cors = require('cors');
const quiz1Router = require('./routes/quiz1Route');
const quiz2Router = require('./routes/quiz2Route');
const connectToDB = require('./database');
const app = express();
app.use(cors());
app.use(express.json());

connectToDB();

app.use('/quiz1', quiz1Router);
app.use('/quiz2', quiz2Router);

module.exports = app;
