'use strict';
const mongoose = require('mongoose');

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PSSWRD = process.env.MONGODB_PSSWRD;
const MONGODB_HOST = process.env.MONGODB_HOST;
const MONGODB_DBNAME = process.env.MONGODB_PLAYLISTDB;

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PSSWRD}@${MONGODB_HOST}/${MONGODB_DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', () => {
  console.log('DB Connected');
});

module.exports = DB;
