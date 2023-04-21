const fs = require('fs');
const dotenv = require('dotenv');
const connectToMongoDB = require('../database.js');
const Question = require('../models/quiz1QuestionModel');

dotenv.config({ path: '../config.env' });

connectToMongoDB();

const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/data/quiz1Questions.json`, 'utf-8')
);

const exportData = async function () {
  try {
    await Question.create(questions);
    console.log('Exporting finished.');
  } catch (err) {
    console.error(err);
  }
};

const deleteAllQuestions = async function () {
  try {
    await Question.deleteMany();
    console.log('Data successfully deleted.');
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  await deleteAllQuestions();
  await exportData();
  process.exit();
})();
