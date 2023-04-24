const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/config.env' });
const app = require(__dirname + '/app');
const port = process.env.PORT || 9000;
const server = app.listen(port);

module.exports = server;
