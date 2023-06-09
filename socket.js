const socketio = require('socket.io');
const server = require(__dirname + '/server.js');

const createBalls = require(__dirname + '/utilities/createBalls');
const Question = require(__dirname + '/models/quiz1QuestionModel.js');

const io = socketio(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const users = [];
// [{username:"hjk",isJudge:true,room:101}]

io.on('connect', socket => {
  console.log('Connected');

  socket.on('connection_ready', () => {
    socket.emit('hello', 'You are connected');
  });

  socket.on('username', username => {
    const user = users.find(val => val.username === username);
    console.log(user);
    if (user) {
      socket.emit('isJudge', user.isJudge);
      return;
    }

    const isJudge = Math.random() <= 0.5 ? true : false;

    users.push({ username, isJudge });

    socket.emit('isJudge', isJudge);
    console.log(username);
    console.log({ username, isJudge });
  });

  socket.on('quiz1Answers', async submittedAnswers => {
    try {
      console.log(submittedAnswers);
      // check how many answers were right
      const correctAnswers = await Question.find(
        {},
        { question: 0, options: 0 }
      );
      let correctCount = 0;
      submittedAnswers.forEach(submittedAnswer => {
        const targetAnswer = correctAnswers.find(
          correctAnswer =>
            correctAnswer._id.toString() === submittedAnswer._id.toString()
        );

        if (submittedAnswer.answer === targetAnswer.answer) correctCount++;
      });

      console.log(correctCount);

      // send this number (together with a user identifier) to the judge
    } catch (err) {
      console.error(err);
    }
  });

  socket.on('quiz2Answers', submittedAnswers => {
    console.log(submittedAnswers);
  });

  socket.on('requestBalls', () => {
    console.log('balls requested');
    const balls = createBalls(10);
    socket.emit('receiveBalls', balls);
  });

  socket.on('dataFromClient', clientData => {
    //
    console.log(clientData);
  });
});

module.exports = io;
