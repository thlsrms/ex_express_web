'use strict';
const express = require('express');
const Playlist = require('../db/models/playlist');
const router = new express.Router();

router.get('/playlists', (req, res) => {
    
});

router.post('/playlist', async (req, res) => {
    let newPlaylist = new Song(req.body.playlist);
    try {
        await newPlaylist.save();
        res.status(201).send(newPlaylist);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/playlists/:id', (req, res) => {
    
});

router.patch('/playlists/:id', (req, res) => {
    
});

router.delete('/playlists/:id', (req, res) => {
    
});

module.exports = router;