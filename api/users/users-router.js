const express = require('express');

const { validateUserId, validateUser, validatePost } = require('../middleware/middleware.js')

const User = require('./users-model.js')
const Post = require('../posts/posts-model.js')

const router = express.Router();

router.get('/', (req, res, next) => {
  User.get()
  .then(users => {
    res.json(users)
  })
  .catch(next)
});

router.get('/:id', validateUserId, (req, res, next) => {
  res.json(req.user)
});

router.post('/', validateUser, (req, res, next) => {
  User.insert({ name: req.name})
    .then(newUser =>{
      res.status(201).json(newUser)
    })
    .catch(next)
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
  console.log(req.name)
});

router.delete('/:id', validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  console.log(req.user)
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  console.log(req.user)
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  console.log(req.user)
  console.log(req.text)
});

router.use((err, req, res, next) => { // eslint disable line
  res.status(err.status || 500).json({
    customMessage: 'something tragic inside posts router happened',
    message: err.message,
    stack: err.stack,
  })
})

// do not forget to export the router
module.exports = router;