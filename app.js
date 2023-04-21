const express = require('express');
const cors = require('cors');
const quiz1Router = require('./routes/quiz1Route');
const connectToDB = require('./database');
const app = express();
app.use(cors());
app.use(express.json());

connectToDB();

app.use('/quiz1', quiz1Router);

module.exports = app;
