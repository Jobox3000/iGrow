// services/calendar.service.js
const Calendar = require('../models/Calendar');

// Ottieni tutti i calendari
const getAllCalendars = async () => {
    try {
        const calendars = await Calendar.find();
        return calendars;
    } catch (error) {
        throw error;
    }
};

const getCalendarById = async (calendarId) => {
    try {
        const calendar = await Calendar.findOne({ _id: calendarId });

        if (!calendar) {
            throw new Error('Calendario non trovato');
        }

        return calendar;
    } catch (error) {
        throw error;
    }
};

const getCalendarByGrowId = async (growId) => {
    try {

        const calendar = await Calendar.findOne({ ref_grow: growId });

        if (!calendar) {
            throw new Error('Calendario non trovato');
        }

        return calendar;
    } catch (error) {
        throw error;
    }
};

// Ottieni un calendario per ID e ID della Grow
const getCalendarByIdAndGrowId = async (growId, calendarId) => {
    try {
        const calendar = await Calendar.findOne({ ref_grow: growId, _id: calendarId });
        if (!calendar) {
            throw new Error('Calendario non trovato');
        }

        return calendar;
    } catch (error) {
        throw error;
    }
};

// Crea un nuovo calendario per una Grow
const createCalendar = async (growId) => {
    try {

        // Controlla se esiste già un calendario per questa Grow
        const existingCalendar = await Calendar.findOne({ ref_grow: growId });
        if (existingCalendar) {
            throw new Error('La Grow ha già un calendario');
        }


        // Lo importo qui per evitare "dipendenze circolari"
        const seedService = require('./seedService');  

        // 1. recupera il seme che ha il riferimento al growId
        const seeds = await seedService.getAllSeedsByGrowId(growId);

        if (!seeds || seeds.length === 0) {
            throw new Error('La Grow specificata non contiene semi');
        }

        // seed
        const seed = seeds[0];
        const _seedId = seed._id

        // 2. recupera i dati del seme con i parametri del seme (ref_bank e ref_seed).
        const dataSeed = await seedService.getSeedData(growId, _seedId);

        const germination = 7;
        const vegetative = 120;
    
        // Estrai il numero dai giorni usando una regular expression
        const daysMatch = dataSeed.days.match(/([-+]?\d*\.\d+|\d+)/);
        const flowering = daysMatch ? parseFloat(daysMatch[0]) : null;
    
        const days = germination + vegetative + flowering;
        
        // Calcola la data di fine (endDate) sommando i dati germination, vegetative e flowering (come fosse giorni) alla data di inizio (startDate)
        const startDate = new Date();
        const endDate = days ? new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000) : null;

        // Create Calendar
        const newCalendar = new Calendar({
            ref_grow: growId,
            germination,
            vegetative,
            flowering,
            startDate,
            endDate,
        });

        await newCalendar.save();

        return newCalendar;
    } catch (error) {
        throw error;
    }
};

// Aggiorna un calendario
const updateCalendar = async (growId, calendarId, germination, vegetative, flowering, startDate, endDate) => {
    try {
        const calendar = await Calendar.findOneAndUpdate(
            { ref_grow: growId, _id: calendarId },
            { germination, vegetative, flowering, startDate, endDate },
            { new: true }
        );

        if (!calendar) {
            throw new Error('Calendario non trovato');
        }

        return calendar;
    } catch (error) {
        throw error;
    }
};

// Elimina un calendario
const deleteCalendar = async (growId, calendarId) => {
    try {
        const calendar = await Calendar.findOneAndDelete({ ref_grow: growId, _id: calendarId });

        if (!calendar) {
            throw new Error('Calendario non trovato');
        }

        return calendar;
    } catch (error) {
        throw error;
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
