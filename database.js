const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: __dirname + '/config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectToMongoDB = async function () {
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB connection successfull');
};

module.exports = connectToMongoDB;
