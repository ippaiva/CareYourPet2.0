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
    password
  } = req.body;

  if (name === ''
  || lastName === ''
  || username === ''
  || email === ''
  || address === ''
  || zipcode === ''
  || phone === ''
  || password === '') {
    res.status(200).json({ message: 'Favor preencher todos os campos', code: 400 });
    return;
  }

  User.findOne({ username }, 'username', (err, user) => {
    if (user !== null) {
      return res.status(200).json({ message: 'The username already exists', code: 400 });
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
        req.login(user, function(err) {
          if (err) { return next(err); }
          return res.status(200).json(user);
        });
      })
      .catch((err) => {
        console.log(err.message);
        return res.status(200).json({ message: 'Nao foi possivel salvar o usuario', code: 400 });
      });
  });
});

// LOGGEDIN
router.get('/loggedin', (req, res, next) => {
  return res.status(200).json(req.user);
});

// LOGOUT
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json(req.user);
});

module.exports = router;
