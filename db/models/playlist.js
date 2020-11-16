'use strict';
const mongoose = require('mongoose');
const { Song } = require('./song');

const Playlist = mongoose.model('Playlist', new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        required: true
    },
    songs: {
        type: Array,
        default: [Song],
    }
}));

module.exports = Playlist;