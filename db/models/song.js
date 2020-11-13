'use strict';
const mongoose = require('mongoose');

const Song = mongoose.model('Song', new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: false,
    }
}));

module.exports = Song;

