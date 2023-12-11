// controllers/authController.js
const authService = require('../services/authService');


// #1 - REGISTER this USER in {USERS}
const registerUser = async (req, res) => {

    // Parametri in input
    const { username, email, password } = req.body;

    try {

        // Register
        const newUser = await authService.registerUser(username, email, password);

        // #pass
        res.status(201).json({ user: newUser });

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #2 - LOGIN this USER in {USERS}
const loginUser = async (req, res) => {

    // Parametri in input
    const { username, email, password } = req.body;

    try {

        // Login
        const user = await authService.loginUser(username, email, password);

        // Create Token
        const token = await user.generateAuthToken();

        // #pass
        res.status(200).json({ message: 'Accesso riuscito', user, token });

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #3 - LOGOUT this USER in {USERS}
const logoutUser = async (req, res) => {
    try {

        // Delete Token
        const token = req.header('Authorization').replace('Bearer ', '');
        await authService.logoutUser(token);

        // #pass
        res.status(200).json({ message: 'Logout effettuato con successo' });

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
