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
    const {amount, percentage, interest, propertyTax, homeAssoc, mortgageInsurance, homeInsurance} = req.query;
    // I need principle, interest, number of months
    // principle will either be given as loan amount or can be calculated with down payment percentage and house value
    // amount, percentage, and interest are the only required
    const P = amount - amount * (percentage / 100);
    const i = interest / 1200;
    const tax = propertyTax || 0.01;
    const hoa = homeAssoc || 0;
    const pmi = mortgageInsurance || 0;
    const insurance = homeInsurance || 1500;
    // I will validate that these values exist on the form on the front end so no validation is necessary on the backend
    const m10 = P * (i * (1 + i) ** 120) / ((1 + i) ** 120 - 1) + (amount * tax + hoa + pmi + insurance) / 12;
    const m15 = P * (i * (1 + i) ** 180) / ((1 + i) ** 180 - 1) + (amount * tax + hoa + pmi + insurance) / 12;
    const m30 = P * (i * (1 + i) ** 360) / ((1 + i) ** 360 - 1) + (amount * tax + hoa + pmi + insurance) / 12;
    res.status(200).json({ tenYear: Math.round(m10), fifteenYear: Math.round(m15), thirtyYear: Math.round(m30), });
})


app.listen(3001);
console.log('Listening on port 3001');