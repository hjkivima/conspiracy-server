const express = require('express');
const quiz2Controller = require(`${__dirname}/../controllers/quiz2Controller`);

const router = express.Router();

router.route('/').get(quiz2Controller.getAllQuestions);

module.exports = router;
