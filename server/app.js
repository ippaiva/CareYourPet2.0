require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

mongoose
  .connect('mongodb://localhost/server', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });


const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ADD CORS SETTINGS HERE TO ALLOW CROSS-ORIGIN INTERACTION:
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));

// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator', // Colocar no .env
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));
require('./passport')(app);

const index = require('./routes/index');
const authRoutes = require('./routes/auth');
const establishments = require('./routes/establishments-routes');

app.use('/', index);
app.use('/api/auth', authRoutes);
app.use('/establishments', establishments);

module.exports = app;
