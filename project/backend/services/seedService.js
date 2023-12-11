// services/seedService.js
const Seed = require('../models/Seed');
const Calendar = require('../models/Calendar');
const bankService = require('./bankService');
const calendarService = require('./calendarService');

// Ottieni tutti i semi
const getAllSeeds = async () => {
    try {
        const seeds = await Seed.find();
        return seeds;
    } catch (error) {
        throw error;
    }
};

// Ottieni un seme per ID
const getSeedById = async (seedId) => {
    try {
        const seed = await Seed.findOne({ _id: seedId });
        if (!seed) {
            throw new Error('Seme non trovato');
        }

        return seed;
    } catch (error) {
        throw error;
    }
};

// Ottieni i dati del seme corrispondente a _seedId della grow corrispondente a growId
const getSeedData = async (growId, _seedId) => {
    try {
        const seed = await Seed.find({ ref_grow: growId, _id: _seedId});
        console.log(seed);
        const bankId = seed[0].ref_bank;
        const seedId = seed[0].ref_seed;
        const dataSeed = await bankService.getSeedByIndices(bankId, seedId);
        
        return dataSeed;

    } catch (error) {
      throw error;
    }
};

// Ottieni tutti i semi di una coltivazione (Grow)
const getAllSeedsByGrowId = async (growId) => {
    try {
        
        const seeds = await Seed.find({ ref_grow: growId });
        return seeds;

    } catch (error) {
        throw error;
    }
};

// Crea un nuovo seme per una coltivazione (Grow)
const createSeed = async (growId, ref_bank, ref_seed) => {
  try {
      // Controlla se esiste già un seme per questa Grow
      const existingSeed = await Seed.findOne({ ref_grow: growId });
      if (existingSeed) {
          throw new Error('La Grow ha già un seme');
      }

      // Se non esiste, crea il nuovo seme
      const newSeed = new Seed({
          ref_grow: growId,
          ref_bank,
          ref_seed,
      });

      await newSeed.save();

      return newSeed;
  } catch (error) {
      throw error;
  }
};

// Aggiorna un seme
const updateSeed = async (growId, seedId, ref_bank, ref_seed) => {
    try {

        const GrowSeed = await Seed.findOneAndUpdate(
            { ref_grow: growId, _id: seedId },
            { ref_bank, ref_seed },
            { new: true }
        );

        if (!GrowSeed) {
            throw new Error('Seme non trovato');
        }

        const _seedId = seedId;

        // 1. recupera i dati del seme
        const dataSeed = await getSeedData(growId, _seedId);

        const germination = 7;
        const vegetative = 120;
    
        // Estrai il numero dai giorni usando una regular expression
        const daysMatch = dataSeed.days.match(/([-+]?\d*\.\d+|\d+)/);
        const flowering = daysMatch ? parseFloat(daysMatch[0]) : null;
    
        const days = germination + vegetative + flowering;
        
        // Calcola la data di fine (endDate) sommando i dati germination, vegetative e flowering (come fosse giorni) alla data di inizio (startDate)
        const startDate = new Date();
        const endDate = days ? new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000) : null;



        const calendar = await Calendar.findOne({ ref_grow: growId });

        // Aggiorna il calendario
        const calendarId = calendar._id; 
        await calendarService.updateCalendar(growId, calendarId, germination, vegetative, flowering, startDate, endDate);        


        return GrowSeed;
    } catch (error) {
        throw error;
    }
};

// Elimina un seme
const deleteSeed = async (growId, seedId) => {
    try {
        const seed = await Seed.findOneAndDelete({ ref_grow: growId, _id: seedId });

        if (!seed) {
            throw new Error('Seme non trovato');
        }

        return seed;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllSeeds,
    getSeedById,
    getSeedData,
    getAllSeedsByGrowId,
    createSeed,
    updateSeed,
    deleteSeed
};