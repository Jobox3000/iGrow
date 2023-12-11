// controllers/growController.js
const growService = require('../services/growService');


/* ROOT */

// #1 - GET * from {GROWS}
const getAllGrows = async (req, res) => {
    try {

        // Ottieni tutte le grows
        const grows = await growService.getAllGrows();

        // #pass
        res.status(200).json(grows);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #2 - GET GROW by GrowId from {GROWS}
const getGrowById = async (req, res) => {

    // Parametri in input
    const { growId } = req.params;

    try {

        // Ottieni la grow corrispondente a growId
        const grow = await growService.getGrowById(growId);

        // #pass
        res.json(grow);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/* CRUDs */

// #3 - GET * by UserId from {GROWS}
const getAllGrowsByUserId = async (req, res) => {

    // Parametri in input
    const { userId } = req.params;

    try {

        // Ottieni le grows dell'utente corrispondente a userId
        const grows = await growService.getAllGrowsByUserId(userId);

        // #pass
        res.status(200).json(grows);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #4 - GET GROW by UserId && GrowId from {GROWS}
const getGrowByIdFromUserId = async (req, res) => {

    // Parametri in input
    const { userId, growId } = req.params;

    try {

        // Ottieni la grow corrispondente a growId dell'utente corrispondente a userId
        const grow = await growService.getGrowByIdFromUserId(userId, growId);

        // #pass
        res.json(grow);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #5 - POST new GROW by UserId in {GROWS}
const createGrow = async (req, res) => {

    // Parametri in input
    const { userId } = req.params;
    const { name, height, width, depth } = req.body;

    try {

        // Crea una nuova grow riferita all'utente corrispondente a userId
        const newGrow = await growService.createGrow(userId, name, height, width, depth);

        // #pass
        res.status(201).json(newGrow);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #6 - PUT GROW by UserId && GrowId in {GROWS}
const updateGrow = async (req, res) => {

    // Parametri in input
    const { userId, growId } = req.params;
    const { name, height, width, depth } = req.body;

    try {

        // Modifica la grow corrispondente a growId dell'utente corrispondente a userId
        const grow = await growService.updateGrow(userId, growId, name, height, width, depth);

        // #pass
        res.json(grow);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// #7 - DELETE GROW by UserId && GrowId from {GROWS}
const deleteGrow = async (req, res) => {

    // Parametri in input
    const { userId, growId } = req.params;

    try {

        // Elimina la grow corrispondente a growId dell'utente corrispondente a userId
        const grow = await growService.deleteGrow(userId, growId);

        // #pass
        res.json(grow);

    // #error
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllGrows,
    getGrowById,
    getAllGrowsByUserId,
    getGrowByIdFromUserId,
    createGrow,
    updateGrow,
    deleteGrow
};