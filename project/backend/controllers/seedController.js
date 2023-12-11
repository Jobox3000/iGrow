// controllers/seedController.js
const seedService = require('../services/seedService');


/* ROOT */

// #1 - GET * from {SEEDS}
const getAllSeeds = async (req, res) => {
    try {

        // Ottieni tutti i semi
        const seeds = await seedService.getAllSeeds();

        // #pass
        res.status(200).json(seeds);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #2 - GET SEED by SeedId from {SEEDS}
const getSeedById = async (req, res) => {

    // Parametri in input
    const { seedId } = req.params;

    try {

        // Ottieni il seme corrispondente a seedId
        const seed = await seedService.getSeedById(seedId);

        // #pass
        res.json(seed);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #3 - GET SEED.DATA by growId && _seedId from {SEEDS} && {BANKS}
const getSeedData = async (req, res) => {

    // Parametri in input
    const { growId, _seedId } = req.params;

    try {

      // Ottieni i dati del seme corrispondente a seedId nella grow corrispondente a growId
      const seedData = await seedService.getSeedData(growId, _seedId);

      // #pass
      res.json(seedData);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* CRUDs */

// #4 - GET SEED by GrowId from {SEEDS}
const getAllSeedsByGrowId = async (req, res) => {

    // Parametri in input
    const { growId } = req.params;

    try {

        // Ottieni il seme della grow corrispondente a growId
        const seeds = await seedService.getAllSeedsByGrowId(growId);

        // #pass
        res.status(200).json(seeds);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #5 - POST new SEED in {SEEDS}
const createSeed = async (req, res) => {

    // Parametri in input
    const { growId } = req.params;
    const { ref_bank, ref_seed } = req.body;

    try {

        // Crea un nuovo seme per la grow corrispondente a growId
        const newSeed = await seedService.createSeed(growId, ref_bank, ref_seed);

        // #pass
        res.status(201).json(newSeed);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #6 - PUT SEED by GrowId && SeedId in {SEEDS}
const updateSeed = async (req, res) => {

    // Parametri in input
    const { growId, seedId } = req.params;
    const { ref_bank, ref_seed } = req.body;

    try {

        // Modifica il seme corrispondente a seedId della grow corrisppndente a growId
        const seed = await seedService.updateSeed(growId, seedId, ref_bank, ref_seed);

        // #pass
        res.json(seed);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #7 - DELETE SEED by GrowId && SeedId from {SEEDS}
const deleteSeed = async (req, res) => {

    // Parametri in input
    const { growId, seedId } = req.params;

    try {

        // Elimina il seme corrispondente a seedId della grow corrisppndente a growId
        const seed = await seedService.deleteSeed(growId, seedId);

        // #pass
        res.json(seed);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
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
