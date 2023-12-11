// services/eventService.js
const Event = require('../models/Event');


// Ottieni tutti gli eventi
const getAllEvents = async () => {
    try {
        const events = await Event.find();
        return events;
    } catch (error) {
        throw error;
    }
};

// Ottieni un evento per ID
const getEventById = async (eventId) => {
    try {
        const event = await Event.findOne({ _id: eventId });
        if (!event) {
            throw new Error('Evento non trovato');
        }

        return event;
    } catch (error) {
        throw error;
    }
};

// Ottieni tutti gli eventi di un calendario
const getEvents = async (calendarId) => {
    try {
        const events = await Event.find({ ref_calendar: calendarId });
        return events;
    } catch (error) {
        throw error;
    }
};

// Ottieni un evento per ID e ID del calendario
const getEventByIdAndCalendarId = async (calendarId, eventId) => {
    try {
        const event = await Event.findOne({ ref_calendar: calendarId, _id: eventId });
        if (!event) {
            throw new Error('Evento non trovato');
        }

        return event;
    } catch (error) {
        throw error;
    }
};

// Crea un nuovo evento per un calendario
const createEvent = async (calendarId, title, description, startDate, endDate) => {
    try {
        const calendarService = require('./calendarService');  

        const calendar = await calendarService.getCalendarById(calendarId);

        // Converti le stringhe di data in oggetti Date
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);

        const maxStartDate = calendar.startDate;
        const maxEndDate = calendar.endDate;
        
        if (!isValidDate(parsedStartDate) || !isValidDate(parsedEndDate)) {
            throw new Error('Date dell\'evento non valide');
        }

        if (parsedStartDate.getTime() < maxStartDate.getTime() || parsedEndDate.getTime() > maxEndDate.getTime()) {
            throw new Error('Le date dell\'evento sono fuori dal range del calendario');
        }

        const newEvent = new Event({
            ref_calendar: calendarId,
            title,
            description,
            startDate,
            endDate,
        });

        await newEvent.save();

        return newEvent;
    } catch (error) {
        throw error;
    }
};

// Validazione delle Date (0000-00-00..)
function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

// Aggiorna un evento
const updateEvent = async (calendarId, eventId, title, description, startDate, endDate) => {
    try {
        const event = await Event.findOneAndUpdate(
            { ref_calendar: calendarId, _id: eventId },
            { title, description, startDate, endDate },
            { new: true }
        );

        if (!event) {
            throw new Error('Evento non trovato');
        }

        return event;
    } catch (error) {
        throw error;
    }
};

// Elimina un evento
const deleteEvent = async (calendarId, eventId) => {
    try {
        const event = await Event.findOneAndDelete({ ref_calendar: calendarId, _id: eventId });

        if (!event) {
            throw new Error('Evento non trovato');
        }

        return event;
    } catch (error) {
        throw error;
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
