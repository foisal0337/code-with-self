const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

require('../../DB/connect'); 

app.use(express.json());

app.listen('5000',()=>{
    console.log("Backend is running ");
})