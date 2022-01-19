const router = require('express').Router();
const {
  validateEmail,
  validatePassword,
  validateUserName,
} = require('./middleware');

router.post('/register',
  validateEmail,
  validatePassword,
  validateUserName,
  (_req, res) => {
    return res.status(201).json({ "message": "user created" });
  });

router.post('/login',
validateEmail,
validatePassword,
(_req, res) => {
  return res.status(201).json({ "token": "86567349784e" });
});

module.exports =  router;