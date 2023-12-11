// controllers/bankController.js
const bankService = require('../services/bankService');


// #1 - GET * from {BANKS} 
const getAllBanks = async (req, res) => {
    try {

        // Ottieni tutte le banche
        const banks = await bankService.getAllBanks();

        // #pass
        res.json(banks);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #2 - GET BANK by ID from {BANKS}
const getBankByIndex = async (req, res) => {
    try {

        // Parametri in input
        const { bankId } = req.params;

        // Ottieni la banca corrispondente a bankId
        const bank = await bankService.getBankByIndex(bankId);

        // #pass
        res.json(bank);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #3 - GET * SEEDS from {BANKS}
const getAllSeedsByBankIndex = async (req, res) => {

    // Parametri in input
    const { bankId } = req.params;

    try {

        // Ottieni tutti i semi della banca corrispondente a bankIndex dal servizio
        const seeds = await bankService.getAllSeedsByBankIndex(bankId);

        // #pass
        res.json(seeds);

    // #error
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// #4 - GET SEED by ID from {BANKS}
const getSeedByIndices = async (req, res) => {

    // Parametri in input
    const { bankId, seedId } = req.params;

    try {

        // Ottieni il seme corrispondente a bankId e seedId dal servizio
        const seed = await bankService.getSeedByIndices(bankId, seedId);

        // #pass
        res.json(seed);

    // #error
    } catch (error) {
        res.status(400).render('error', { message: error.message, error });
    }
};


module.exports = {
    getAllBanks,
    getBankByIndex,
    getAllSeedsByBankIndex,
    getSeedByIndices
    
};
