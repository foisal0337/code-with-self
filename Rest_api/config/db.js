const config = require('./config.js');

const mongoose = require('mongoose');

const DB_URL = config.db.url || config.db.localUrl ;

mongoose.connect(DB_URL)
.then(()=>console.log('DB is connented'))
.catch ( (err) => console.log(err))

