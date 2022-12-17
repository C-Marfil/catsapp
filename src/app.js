const express = require('express');
const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    res.status(201).json(req.body);
})

module.exports = app;