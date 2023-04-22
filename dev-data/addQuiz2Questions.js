const fs = require('fs');
const dotenv = require('dotenv');
const connectToMongoDB = require('../database.js');
const SliderQuestion = require('../models/quiz2QuestionModel');

dotenv.config({ path: '../config.env' });

connectToMongoDB();

const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/data/quiz2Questions.json`, 'utf-8')
);

const exportData = async function () {
  try {
    await SliderQuestion.create(questions);
    console.log('Exporting finished.');
  } catch (err) {
    console.error(err);
  }
};

const deleteAllQuestions = async function () {
  try {
    await SliderQuestion.deleteMany();
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
