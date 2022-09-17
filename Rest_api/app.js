const express= require('express');
require('./config/db.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



module.exports = app;
