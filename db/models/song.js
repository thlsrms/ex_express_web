'use strict';
const mongoose = require('mongoose');

const Song = mongoose.model('Song', new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
    },
    yturl: {
        type: String,
    },
    ytimage: {
        type: String,
    }
}));

/* 
title: string
artist: string
ytlink: string
image: string */

module.exports = Song;

