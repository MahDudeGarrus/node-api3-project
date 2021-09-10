const express = require('express');
const { logger, validateUserId, validateUser, validatePost } = require('./middleware/middleware.js')
const usersRouter = require('./users/users-router.js')

const server = express();

server.use(express.json())
server.use('/api/users', usersRouter);

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
