// services/userService.js
const User = require('../models/User');


// Ottieni tutti gli utenti
const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
};

// Ottieni un utente per ID
const getUserById = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId });
        if (!user) {
            throw new Error('Utente non trovato');
        }

        return user;
    } catch (error) {
        throw error;
    }
};

// Aggiorna un utente
const updateUser = async (userId, username, email, password) => {
    try {
        const user = await User.findOneAndUpdate({ _id: userId }, { username, email, password }, { new: true });

        if (!user) {
            throw new Error('Utente non trovato');
        }

        return user;
    } catch (error) {
        throw error;
    }
};

// Elimina un utente
const deleteUser = async (userId) => {
    try {
        const user = await User.findOneAndDelete({ _id: userId });

        if (!user) {
            throw new Error('Utente non trovato');
        }

        return user;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
