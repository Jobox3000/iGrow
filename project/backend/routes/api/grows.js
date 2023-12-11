// routes/grows.js
const express = require('express');
const router = express.Router();
const growController = require('../../controllers/growController');


// Ottieni tutte le grow
router.get('/', growController.getAllGrows);

// Ottieni una grow per ID
router.get('/:growId', growController.getGrowById);

// Ottieni tutte le grow di un utente
router.get('/user/:userId', growController.getAllGrowsByUserId);

// Ottieni una grow di un utente per ID
router.get('/user/:userId/grow/:growId', growController.getGrowByIdFromUserId);

// Crea una nuova grow
router.post('/user/:userId', growController.createGrow);

// Aggiorna una grow
router.put('/user/:userId/grow/:growId', growController.updateGrow);

// Elimina una grow
router.delete('/user/:userId/grow/:growId', growController.deleteGrow);


// SEED
/*

// Ottieni il seme di una grow
router.get('/user/:userId/grow/:growId/seed', growController.getSeedOfGrowByIdFromUserId);

// Modifica il parametro ref_seed di una grow di un utente (scegli seme)
router.put('/user/:userId/grow/:growId/seed', growController.updateGrowRefSeed);

// Elimina il parametro ref_seed di una grow di un utente (rimuovi seme)
router.put('/user/:userId/grow/:growId/seed/delete', growController.deleteGrowRefSeed);

*/


module.exports = router;
