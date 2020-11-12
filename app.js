const express = require('express');


const port = process.env.PORT || 49990;
// express app
const app = express();

// listen for requests
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/search', (req, res) => {
    res.render('search', {title: 'Search'});
});

app.get('/add', (req, res) => {
    res.render('add', {title: 'Add new Song'});
});

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});