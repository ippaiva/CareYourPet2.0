const express = require('express');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

function isLogged(req) {
  if (req.session.currentUser) {
    return true;
  }
  return false;
}

router.get('/home', (req, res) => {
  if (isLogged(req)) {
    res.render('home');
  } else {
    res.render('index', {err: 'Please login.'});
  }
});


module.exports = router;
