'use strict';
const express = require('express');
const url = require('url');
const path = require('path');
const ytSearch = require('./lib/ytsearch');
const { DB } = require('./db/mongoose');

const songRouter = require('./routers/song');
const playlistRouter = require('./routers/playlist');

const port = process.env.PORT || 3000;
// express app
const app = express();

// listen for requests
app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Listening to port ${port}`);
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

// endpoints
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/playlist', async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        if ('qr' in Object.keys(req.query)) {
            console.log(await ytSearch(req.query.qr))
        }

        if ('url' in req.query) {
            app.locals.playlist = req.query.url;
            res.render('playlist-manage', { title: 'Manage Playlist', playlist: `${req.query.url}`, playlistSearchResult: '' });
            return;
        }
    }
    if (app.locals.playlist) {
        res.redirect(url.format({
            pathname: '/playlist',
            query: {
                'url': app.locals.playlist
            }
        }));
        return;
    }
    res.render('playlist-manage', { title: 'Manage Playlist', playlist: '', playlistSearchResult: '' });
});

app.get('/add', (req, res) => {
    res.render('add', { title: 'Add new Song' });
});

// routing
app.use('/api', songRouter);
app.use('/api', playlistRouter);

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});