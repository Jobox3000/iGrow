// routes/api/users.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');


// Api per ottenere tutti gli utenti
router.get('/', userController.getAllUsers);

// Api per ottenere un utente
router.get('/:userId', userController.getUserById);

// Api per modificare un utente
router.put('/:userId', userController.updateUser);

// Api per eliminare di un utente
router.delete('/:userId', userController.deleteUser);


module.exports = router;
