// models/Bank.js
const mongoose = require('mongoose');

const seedSchema = new mongoose.Schema({
    name: String,
    sex: String,
    variety: String,
    days: String,
    property: [],
    description: [],
    imges: [],
    genetic_line: []
});

const bankSchema = new mongoose.Schema({
    index: Number,
    name: String,
    seeds: [seedSchema]
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = { Bank };
