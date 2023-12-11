// services/bankService.js
const { Bank } = require('../models/Bank');


// Verifica se bankId è un numero
const validateNumber = (bankId) => {
    if (isNaN(bankId)) {
        throw new Error('Indice della banca non valido');
    }
};

// Ottieni tutte le banche
const getAllBanks = async () => {
    try {
        const banks = await Bank.find();
        return banks;
    } catch (error) {
        throw error;
    }
};

// Ottieni la banca corrispondente a bankId
const getBankByIndex = async (bankId) => {
    try {
        validateNumber(bankId);

        const bank = await Bank.findOne({ index: parseInt(bankId, 10) });

        if (!bank) {
            throw new Error('Banca non trovata');
        }

        return bank;
    } catch (error) {
        throw error;
    }
};

// Ottieni tutti i semi di una determinata banca
const getAllSeedsByBankIndex = async (bankId) => {
    try {
        // Utilizza la funzione getBankByIndex per ottenere la banca corrispondente
        const bank = await getBankByIndex(bankId);

        // Estrai i semi dalla banca
        const seeds = bank.seeds;
        return seeds;
    } catch (error) {
        throw error;
    }
};

// Ottieni un determinato seme di una determinata banca
const getSeedByIndices = async (bankId, seedId) => {
    try {

        // Verifica se gli indici sono numeri
        validateNumber(bankId);
        validateNumber(seedId);

        // Ottieni la banca corrispondente a bankId
        const bank = await getBankByIndex(bankId);

        const seeds = bank.seeds;

        if (!seeds || seeds.length <= seedId) {
            throw new Error('Seme non trovato');
        }

        const seed = seeds[seedId];
        
        return seed;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    validateNumber,
    getAllBanks,
    getBankByIndex,
    getAllSeedsByBankIndex,
    getSeedByIndices

};
