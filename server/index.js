require("dotenv").config();
const express = require('express');
var cors = require('cors');
const path = require("path");

const app = express();

// enable cors
app.use(cors());
// use json in order to allow us to access the req.body.
app.use(express.json());

// set up routes
app.get('/api/mortgagecalculator', (req, res) => {

})


app.listen(3001);
console.log('Listening on port 3001');