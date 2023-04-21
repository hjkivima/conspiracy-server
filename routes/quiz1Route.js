const express = require('express');
const quiz1Controller = require(`${__dirname}/../controllers/quiz1Controller`);

const router = express.Router();

router.route('/').get(quiz1Controller.getAllQuestions);

module.exports = router;
