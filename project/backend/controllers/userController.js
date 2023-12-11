// controllers/userController.js
const userService = require('../services/userService');


// #1 - GET * from {USERS}
const getAllUsers = async (req, res) => {
    try {

        // Ottieni tutti gli utenti
        const users = await userService.getAllUsers();

        // #pass
        res.status(200).json(users);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #2 - GET USER by ID from {USERS}
const getUserById = async (req, res) => {

    // Parametri in input
    const { userId } = req.params;

    try {

        // Ottieni l'utente corrispondente a userId
        const user = await userService.getUserById(userId);

        // #pass
        res.json(user);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #3 - UPDATE USER by ID from {USERS}
const updateUser = async (req, res) => {

    // Parametri in input
    const { userId } = req.params;
    const { username, email, password } = req.body;

    try {

        // Aggiorna l'utente corrispondente a userId
        const user = await userService.updateUser(userId, username, email, password);

        // #pass
        res.json(user);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #4 - DELETE USER by ID from {USERS}
const deleteUser = async (req, res) => {

    // Parametri in input
    const { userId } = req.params;

    try {

        // Elimina l'utente corrispondente a userId
        const user = await userService.deleteUser(userId);

        // #pass
        res.json(user);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
