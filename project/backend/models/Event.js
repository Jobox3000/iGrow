const mongoose = require('mongoose');

// Event
const eventSchema = new mongoose.Schema({
    ref_calendar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Calendar',
        required: true
    },
    title: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;