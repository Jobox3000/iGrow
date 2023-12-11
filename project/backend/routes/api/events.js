// routes/api/events.js
const express = require('express');
const router = express.Router();
const eventController = require('../../controllers/eventController');


// Api per ottenere tutti gli eventi
router.get('/', eventController.getAllEvents);

// Api per ottenere un evento dato :eventId
router.get('/:eventId', eventController.getEventById);

// Api per ottenere tutti gli eventi di un calendario dato :calendarId
router.get('/calendar/:calendarId', eventController.getEvents);

// Api per ottenere un evento dato :eventId di un calendario dato :calendarId
router.get('/calendar/:calendarId/event/:eventId', eventController.getEventByIdAndCalendarId);

// Api per creare un evento in un calendario dato :calendarId
router.post('/calendar/:calendarId', eventController.createEvent);

// Api per modificare un evento dato :eventId di un calendario dato :calendarId
router.put('/calendar/:calendarId/event/:eventId', eventController.updateEvent);

// Api per eliminare un evento dato :eventId di un calendario dato :calendarId
router.delete('/calendar/:calendarId/event/:eventId', eventController.deleteEvent);


module.exports = router;
