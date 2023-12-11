const mongoose = require('mongoose');

// Calendar
const calendarSchema = new mongoose.Schema({
    ref_grow: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grow',
        required: true
    },
    germination: Number,
    vegetative: Number,
    flowering: Number,
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
