'use strict';
const express = require('express');
const path = require('path');
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
    res.render('index', {title: 'Home'});
});

app.get('/search', (req, res) => {
    res.render('search', {title: 'Search'});
});

app.get('/add', (req, res) => {
    res.render('add', {title: 'Add new Song'});
});

// routing
app.use('/api', songRouter);
app.use('/api', playlistRouter);

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});