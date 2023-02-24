require("dotenv").config();
const express = require('express');
var cors = require('cors');
const path = require("path");

const app = express();

// set up assets and middleware
app.use(express.static(path.join(__dirname, "../public")));
// enable cors
app.use(cors());
// use json in order to allow us to access the req.body.
app.use(express.json());

// set up routes
app.get('/contact', (req, res) => {
    res.send("contact");
})

app.listen(3001);
console.log('Listening on port 3001');