// controllers/eventController.js
const eventService = require('../services/eventService');


/* ROOT */

// #1 - GET * from {EVENTS}
const getAllEvents = async (req, res) => {

    try {

        // Ottieni tutti gli eventi
        const events = await eventService.getAllEvents();

        // #pass
        res.json(events);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #2 - GET EVENT by 'eventId' from {EVENTS}
const getEventById = async (req, res) => {
    try {

        // Parametri in input
        const { eventId } = req.params;

        // Ottieni l'evento corrisppndente a eventId
        const event = await eventService.getEventById(eventId);

        // #pass
        res.json(event);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* CRUDs */

// #3 - GET * by 'calendarId' from {EVENTS}
const getEvents = async (req, res) => {
    try {

        // Parametri in input
        const { calendarId } = req.params;

        // Ottieni tutti gli eventi del calendario corrispondente a calendarId
        const events = await eventService.getAllEvents(calendarId);

        // #pass
        res.json(events);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #4 - GET EVENT by 'calendarId && eventId' from {EVENTS}
const getEventByIdAndCalendarId = async (req, res) => {
    try {

        // Parametri in input
        const { calendarId, eventId } = req.params;

        // Ottieni l'evento corrispondente a calendarId e eventId
        const event = await eventService.getEventByIdAndCalendarId(calendarId, eventId);

        // #pass
        res.json(event);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #5 - POST new EVENT by 'calendarId' from {EVENTS}
const createEvent = async (req, res) => {
    try {

        // Parametri in input
        const { calendarId } = req.params;
        const { title, description, startDate, endDate } = req.body;

        // Crea l'evento nel calendario corrispondente a calendarId
        const newEvent = await eventService.createEvent(calendarId, title, description, startDate, endDate);

        // #pass
        res.status(201).json(newEvent);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #6 - UPDATE EVENT by 'calendarId && eventId' from {EVENTS}
const updateEvent = async (req, res) => {
    try {

        // Parametri in input
        const { calendarId, eventId } = req.params;
        const { title, description, startDate, endDate } = req.body;

        // Modifica l'evento corrispondente a calendarId del calendario corrispondente a calendarId
        const updatedEvent = await eventService.updateEvent(calendarId, eventId, title, description, startDate, endDate);
        
        // #pass
        res.json(updatedEvent);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #7 - DELETE EVENT by 'calendarId && eventId' from {EVENTS}
const deleteEvent = async (req, res) => {
    try {

        // Parametri in input
        const { calendarId, eventId } = req.params;

        // Elimina l'evento corrispondente a evenId del calendario corrispondente a calendarId
        const deletedEvent = await eventService.deleteEvent(calendarId, eventId);

        // #pass
        res.json(deletedEvent);
    
    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getEvents,
    getEventById,
    getAllEvents,
    getEventByIdAndCalendarId,
    createEvent,
    updateEvent,
    deleteEvent
};
