// routes/calendar.routes.js
const express = require('express');
const router = express.Router();
const calendarController = require('../../controllers/calendarController');


// Ottieni tutti i calendari
router.get('/', calendarController.getAllCalendars);

// Ottieni un calendario per calendarId
router.get('/:calendarId', calendarController.getCalendarById);

// Ottieni un calendario per growId
router.get('/grow/:growId', calendarController.getCalendarByGrowId);

// Ottieni un calendario per ID e ID della Grow
router.get('/grow/:growId/calendar/:calendarId', calendarController.getCalendarByIdAndGrowId);

// Crea un nuovo calendario per una Grow
router.post('/grow/:growId', calendarController.createCalendar);

// Aggiorna un calendario
router.put('/grow/:growId/calendar/:calendarId', calendarController.updateCalendar);

// Elimina un calendario
router.delete('/grow/:growId/calendar/:calendarId', calendarController.deleteCalendar);


module.exports = router;
