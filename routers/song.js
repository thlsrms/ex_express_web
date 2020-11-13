'use strict';
const express = require('express');
const Song = require('../db/models/song');
const router = new express.Router();

router.get('/songs', async (req, res) => {
    try {
        let songsList = await Song.find({});
        res.send(songsList);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/song', async (req, res) => {
    let newSong = new Song(req.body.song);

    if (!Song.exists(newSong)) {
        try {
            await newSong.save();
            res.status(201).send(newSong);
        } catch (err) {
            res.status(400).send(err);
        }
    } else {
        res.status(400).send('Song already added.');
    }
});

router.get('/songs/:id', (req, res) => {
    
});

router.patch('/songs/:id', (req, res) => {
    
});

router.delete('/songs/:id', (req, res) => {
    
});

module.exports = router;