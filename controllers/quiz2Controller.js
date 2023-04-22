const SliderQuestion = require('../models/quiz2QuestionModel');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await SliderQuestion.find({}, { answer: 0 });

    res.status(200).json({
      status: 'success',
      results: questions.length,
      data: { questions },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};
