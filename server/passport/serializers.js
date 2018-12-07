const passport = require('passport');
const User = require('../models/User');

passport.serializeUser((loggedInUser, cb) => {
  // eslint-disable-next-line no-underscore-dangle
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
    .then((userDocument) => {
      cb(null, userDocument);
    })
    .catch((err) => {
      cb(err);
    });
});
