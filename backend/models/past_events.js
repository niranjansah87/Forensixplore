const mongoose = require('mongoose');

const pastEventsSchema = new mongoose.Schema({
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
    description: {
        type: String,
        
        default: 'This event is conducted by forensixplore club of department of CSIT. This Events is under SIL',
        required: false,
    },
    eventPoster: {
        type: String,
        required: false,
        default:'https://tamanmini.com/taman_jelajah_indonesia/wp-content/uploads/2023/08/event-dummy.png'
    },
    registrationLink: {
        type: String,
        required: false,
        default: 'https://academics.klef.in/',
    },
});

const Event = mongoose.model('Past_events', pastEventsSchema);
module.exports = Event;
