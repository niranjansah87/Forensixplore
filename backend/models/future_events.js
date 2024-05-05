const mongoose = require('mongoose');

const futureEventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['TEC', 'HWB', 'ESO','LCH','IIE'],
        default: 'TEC',
        required: true,
    },
    eventPoster: {
        type: String,
        required: true,
    },
    registrationLink: {
        type: String,
        required: false,
        default: 'https://academics.klef.in/',
    },
});

const Event = mongoose.model('Future_events', futureEventsSchema);
module.exports = Event;
