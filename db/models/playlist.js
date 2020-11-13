'use strict';
const mongoose = require('mongoose');
const { Song } = require('./song');

const Playlist = mongoose.model('Playlist', new mongoose.Schema({
    songs: {
        type: Array,
        default: [Song],
    }
}));

module.exports = Playlist;