const express = require('express');
const passport = require('passport');

const router = express.Router();

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');

const bcryptSalt = 10;

const User = require('../models/User');

// LOGIN
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json(req.user);
});

// SIGNUP
router.post('/signup', (req, res, next) => {

  const {
    name,
    lastName,
    username,
    email,
    address,
    zipcode,
    phone,
    password,
  } = req.body;

  if (name === ''
  || lastName === ''
  || username === ''
  || email === ''
  || address === ''
  || zipcode === ''
  || phone === ''
  || password === '') {
    res.status(400).json({ message: 'aphahode' });
    return;
  }
  
  User.findOne({ username }, 'username', (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }
    
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
    const newUser = new User({
      name,
      lastName,
      username,
      email,
      address,
      zipcode,
      phone,
      password: hashPass,
      // pictureURL: req.file.url
    });
    
    newUser.save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(err);
    });
  });
});

// LOGGEDIN
router.get('/loggedin', (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(400).json({ message: 'The user is not logged' });
  }
});

// LOGOUT
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json(req.user);
});

module.exports = router;
