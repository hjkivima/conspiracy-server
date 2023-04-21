const Question = require('../models/quiz1QuestionModel');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({}, { answer: 0 });

    res.status(200).json({
      status: 'success',
      results: questions.length,
      data: { questions },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};
