// config/default.js
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

// Funzione che restituisce middleware comuni
const getCommonMiddleware = () => {
  const middleware = express();

  // Aggiungi qui altri middleware comuni
  middleware.use(cookieParser());
  middleware.use(express.static(path.join(__dirname, '../public')));

  return middleware;
};

// Funzione che restituisce la configurazione di Express
const getExpressConfig = () => {
  const app = express();

  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.use('/favicon.ico', express.static(path.join(__dirname, '../public/favicon.ico')));
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Aggiungi qui altri middleware di configurazione

  return app;
};

// Funzione che restituisce la gestione predefinita degli errori
const getDefaultErrorMiddleware = () => {
  return [
    (req, res, next) => next(createError(404)),
    (err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    },
  ];
};

module.exports = {
  getCommonMiddleware,
  getExpressConfig,
  getDefaultErrorMiddleware,
};
