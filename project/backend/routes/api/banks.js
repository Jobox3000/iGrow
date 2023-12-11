const express = require('express');
const router = express.Router();
const bankController = require('../../controllers/bankController');

// Api per ottenere tutte le banche
router.get('/', bankController.getAllBanks);

// Api per ottenere tutte una banca
router.get('/:bankId', bankController.getBankByIndex);

// Api per ottenere tutti i semi di una banca
router.get('/:bankId/seeds', bankController.getAllSeedsByBankIndex);

// Api per ottenere un seme di una banca
router.get('/:bankId/seed/:seedId', bankController.getSeedByIndices);

module.exports = router;
