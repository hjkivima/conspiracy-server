const express = require('express');
const socketio = require('socket.io');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
const cors = require('cors');
const connectToDB = require('./database');
app.use(cors());

const port = process.env.PORT || 9000;
const expressServer = app.listen(port);

connectToDB();

const io = socketio(expressServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connect', socket => {
  console.log('Connected');

  socket.on('connection_ready', () => {
    socket.emit('hello', 'You are connected');
  });

  socket.on('quiz1CorrectCount', data => {
    // send this to the judge
    console.log(data);
  });

  socket.on('dataFromClient', data => {
    //
    console.log(data);
  });
});
