// routes/seeds.js
const express = require('express');
const router = express.Router();
const seedController = require('../../controllers/seedController');


// Api per ottenere tutti i semi
router.get('/', seedController.getAllSeeds);

// Api per ottenere il seme da id (seedId)
router.get('/:seedId', seedController.getSeedById);

// Api per ottenere i dati del seme (_seedId) di una Grow (growId)
router.get('/grow/:growId/seed/:_seedId', seedController.getSeedData);

// Api per ottenere il seme di una Grow (growId)
router.get('/grow/:growId', seedController.getAllSeedsByGrowId);

// Api per creare un nuovo seme per una Grow (growId)
router.post('/grow/:growId', seedController.createSeed);

// Api per modificare il seme (seedId) di una Grow (growId)
router.put('/grow/:growId/seed/:seedId', seedController.updateSeed);

// Api per eliminare il seme (seedId) di una Grow (growId)
router.delete('/grow/:growId/seed/:seedId', seedController.deleteSeed);


module.exports = router;
