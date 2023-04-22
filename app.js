const express = require('express');
const cors = require('cors');
const quiz1Router = require(__dirname + '/routes/quiz1Route');
const quiz2Router = require(__dirname + '/routes/quiz2Route');
const connectToDB = require(__dirname + '/database');
const app = express();
app.use(cors());
app.use(express.json());

connectToDB();

app.use('/quiz1', quiz1Router);
app.use('/quiz2', quiz2Router);

module.exports = app;
