const express = require('express');
const router = express.Router();
const authRouter = require('./api/auth');
const banksRouter = require('./api/banks');
const usersRouter = require('./api/users');
const growsRouter = require('./api/grows');
const seedsRouter = require('./api/seeds');
const calendarsRouter = require('./api/calendars');
const eventsRouter = require('./api/events');

// index (express)
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// auth.js 
router.use('/api/auth', authRouter);

// banks.js 
router.use('/api/bank', banksRouter);

// users.js 
router.use('/api/user', usersRouter);

// grows.js 
router.use('/api/grow', growsRouter);

// seeds.js 
router.use('/api/seed', seedsRouter);

// calendars.js 
router.use('/api/calendar', calendarsRouter);

// events.js 
router.use('/api/event', eventsRouter);


module.exports = router;
