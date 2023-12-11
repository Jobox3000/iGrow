// seeders/banks&seeds.js
const fs = require('fs');
const jsonData = require('./banks&seeds.json');
const mongoose = require('mongoose');
const connectDB = require('../config/database'); 
const { Bank } = require('../models/Bank');

connectDB();

// insert banks&seeds
Bank.insertMany(jsonData.map((bankData, _index) => ({
    index: _index,
    name: bankData.name,
    seeds: bankData.seeds.map(seedData => ({
        name: seedData.name,
        sex: seedData.sex,
        variety: seedData.variety,
        days: seedData.days,
        property: seedData.property,
        description: seedData.description,
        imges: seedData.imges,
        genetic_line: seedData.genetic_line
    })),
})))
.then(() => {
    console.log('Dati inseriti con successo!');
    mongoose.connection.close();
    process.exit(0);
})
.catch(error => console.error(error));
