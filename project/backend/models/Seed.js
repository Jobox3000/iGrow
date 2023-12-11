const mongoose = require('mongoose');

const seedSchema = new mongoose.Schema({
    ref_grow: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grow',
        required: true
    },
    ref_bank: { 
        type: Number,  
        required: true 
    },
    ref_seed: { 
        type: Number,  
        required: true 
    },
});

const Seed = mongoose.model('Seed', seedSchema);  
module.exports = Seed;
