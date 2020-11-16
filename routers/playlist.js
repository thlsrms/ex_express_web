'use strict';
const express = require('express');
const url = require('url');
const { nanoid } = require('nanoid');
const Playlist = require('../db/models/playlist');
const router = new express.Router();

router.get('/playlist/search', async (req, res) => {
    await Playlist.find({ name: { $regex: req.query.playlist.name, $options: 'i' } }, 'songs name url author updated')
    .then( (data) => {
        res.render('playlist-manage', { title: 'Manage Playlist', playlist: '', playlistSearchResult: data })
    });
});

router.post('/playlist/add', async (req, res) => {
    let nanoIDurl = nanoid();
    let nanoToken = nanoid(10);

    let newPlaylist = new Playlist();
        newPlaylist.url = nanoIDurl,
        newPlaylist.name = req.body.playlist.name,
        newPlaylist.author = req.body.playlist.author,
        newPlaylist.token = nanoToken,
        newPlaylist.updated = Date.now()

    const exists = await Playlist.find({ name: newPlaylist.name, author: newPlaylist.author });

    if (exists.length > 0) {
        res.status(304).render('playlist-manage', { title: 'Manage Playlist', playlist: '', playlistSearchResult: '' });
        return;
    }
    try {
        await newPlaylist.save();
        res.status(201).redirect(url.format({
            pathname: '/playlist',
            query: {
                'url': nanoIDurl
            }
        }));
        //render('playlist-manage', { title: 'Manage Playlist', playlist: nanoIDurl });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/playlists/:url', (req, res) => {

});

router.patch('/playlists/:id', (req, res) => {

});

router.delete('/playlists/:id', (req, res) => {

});

module.exports = router;