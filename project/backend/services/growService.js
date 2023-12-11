// services/growService.js
const Grow = require('../models/Grow');


// Ottieni tutte le Grow
const getAllGrows = async () => {
    try {
        const grows = await Grow.find();
        return grows;
    } catch (error) {
        throw error;
    }
};

// Ottieni una Grow per ID
const getGrowById = async (growId) => {
    try {
        const grow = await Grow.findOne({ _id: growId });
        if (!grow) {
            throw new Error('Grow non trovata');
        }

        return grow;
    } catch (error) {
        throw error;
    }
};

// Ottieni tutte le Grow di un utente
const getAllGrowsByUserId = async (userId) => {
    try {
        const grows = await Grow.find({ ref_user: userId });
        return grows;
    } catch (error) {
        throw error;
    }
};

// Ottieni una Grow di un utente per ID
const getGrowByIdFromUserId = async (userId, growId) => {
    try {
        const grow = await Grow.findOne({ ref_user: userId, _id: growId });
        if (!grow) {
            throw new Error('Grow non trovata');
        }

        return grow;
    } catch (error) {
        throw error;
    }
};

// Crea una nuova Grow
const createGrow = async (userId, name, height, width, depth) => {
    try {
        const newGrow = new Grow({
            ref_user: userId,
            name,
            height,
            width,
            depth
        });

        await newGrow.save();

        return newGrow;
    } catch (error) {
        throw error;
    }
};

// Aggiorna una Grow
const updateGrow = async (userId, growId, name, height, width, depth) => {
    try {
        const grow = await Grow.findOneAndUpdate({ ref_user: userId, _id: growId }, { name, height, width, depth }, { new: true });

        if (!grow) {
            throw new Error('Grow non trovata');
        }

        return grow;
    } catch (error) {
        throw error;
    }
};

// Elimina una Grow
const deleteGrow = async (userId, growId) => {
    try {
        const grow = await Grow.findOneAndDelete({ ref_user: userId, _id: growId });

        if (!grow) {
            throw new Error('Grow non trovata');
        }

        return grow;
    } catch (error) {
        throw error;
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
