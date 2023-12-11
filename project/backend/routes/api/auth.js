// routes/api/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');


// API per la registrazione di un nuovo utente
router.post('/register', authController.registerUser);

// API per il login di un utente
router.post('/login', authController.loginUser);

// API per il logout di un utente
router.post('/logout', authController.logoutUser);


module.exports = router;