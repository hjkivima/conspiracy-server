const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  answer: { type: Number, required: true },
});

const SliderQuestion = mongoose.model('SliderQuestion', questionSchema);

module.exports = SliderQuestion;
