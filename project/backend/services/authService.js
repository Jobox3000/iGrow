// services/authService.js
const User = require('../models/User');
const bcrypt = require('bcrypt');


// Registra un nuovo utente
const registerUser = async (username, email, password) => {
    try {
        // Verifica se l'utente esiste già per email o username
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            throw new Error('L\'utente esiste già.');
        }

        // Cripta la password prima di salvarla nel database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,  // Salva la password criptata
        });

        await newUser.save();

        return newUser;
    } catch (error) {
        throw error;
    }
};

// Effettua il login di un utente
const loginUser = async (username, email, password) => {
    try {
        // Trova l'utente per nome utente o email
        const user = await User.findOne({ $or: [{ username }, { email }] });

        // Verifica se l'utente esiste
        if (!user) {
            throw new Error('Utente non trovato');
        }

        // Verifica la corrispondenza della password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error('Credenziali non valide');
        }

        return user;
    } catch (error) {
        throw error;
    }
};

// Effettua il logout di un utente
const logoutUser = async (token) => {
    try {
        const user = await User.findOne({ tokens: token });

        if (!user) {
            throw new Error('Utente non trovato');
        }

        await user.removeToken(token);
    } catch (error) {
        throw error;
    }
};


module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
