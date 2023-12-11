// controllers/calendar.controller.js
const calendarService = require('../services/calendarService');


/* ROOT */

// #1 - GET * from {CALENDARS}
const getAllCalendars = async (req, res) => {
    try {

        // Ottieni tutti i calendari
        const calendars = await calendarService.getAllCalendars();

        // #pass
        res.status(200).json(calendars);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #2 - GET CALENDAR by CalendarId from {CALENDARS}
const getCalendarById = async (req, res) => {

    // Parametri in input
    const { calendarId } = req.params;

    try {

        // Ottieni il calendario corrispondente a calendarId
        const calendar = await calendarService.getCalendarById(calendarId);

        // #pass
        res.json(calendar);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


/* CRUDs */

// #3 - GET CALENDAR by GrowId from {CALENDARS}
const getCalendarByGrowId = async (req, res) => {

    // Parametri in input
    const { growId } = req.params;

    try {

        // Ottieni il calendario della grow corrispondente a growId
        const calendar = await calendarService.getCalendarByGrowId(growId);

        // #pass
        res.json(calendar);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// #4 - GET CALENDAR by GrowId && CalendarId from {CALENDARS}
const getCalendarByIdAndGrowId = async (req, res) => {

    // Parametri in input
    const { growId, calendarId } = req.params;

    try {

        // Ottieni il calendario corrispondente a calendarId della grow corrispondente a growId
        const calendar = await calendarService.getCalendarByIdAndGrowId(growId, calendarId);

        // #pass
        res.json(calendar);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #5 - POST new CALENDAR by GrowId from {CALENDARS}
const createCalendar = async (req, res) => {

    // Parametri in input
    const { growId } = req.params;
    const { germination, vegetative, flowering, startDate, endDate } = req.body;

    try {

        // Crea il calendario nella grow corrispondente a growId
        const newCalendar = await calendarService.createCalendar(growId, germination, vegetative, flowering, startDate, endDate);
        
        // #pass
        res.status(201).json(newCalendar);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #6 - UPDATE CALENDAR by GrowId && CalendarId from {CALENDARS}
const updateCalendar = async (req, res) => {

    // Parametri in input
    const { growId, calendarId } = req.params;
    const { germination, vegetative, flowering, startDate, endDate } = req.body;

    try {

        // Modifica il calendario corrispondente a calendarId nella grow corrispondente a growId
        const calendar = await calendarService.updateCalendar(growId, calendarId, germination, vegetative, flowering, startDate, endDate);
        
        // #pass
        res.json(calendar);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #7 - DELETE CALENDAR by GrowId && CalendarId from {CALENDARS}
const deleteCalendar = async (req, res) => {

    // Parametri in input
    const { growId, calendarId } = req.params;

    try {

        // Elimina il calendario corrispondente a calendarId nella grow corrispondente a growId
        const calendar = await calendarService.deleteCalendar(growId, calendarId);

        // #pass
        res.json(calendar);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllCalendars,
    getCalendarById,
    getCalendarByGrowId,
    getCalendarByIdAndGrowId,
    createCalendar,
    updateCalendar,
    deleteCalendar
};