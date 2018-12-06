const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt');

const bcryptSalt = 10;

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json(req.user);
});

router.post('/signup', (req, res, next) => {
  const { name, lastName, username, email, address, zipcode, phone, password } = req.body;
  if (name === '' || lastName === '' || username === '' || email === '' || address === '' || zipcode === '' || phone === '' || password === '') {
    res.status(400).json({ message: 'Indicate username and password' });
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
      pictureURL: req.file.url
    });

    newUser.save()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json(req.user);
});

module.exports = router;
