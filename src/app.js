const express = require('express');
const { Cat } = require('./models');
const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat));
});

app.get('/cats', (req, res) => {
    Cat.findAll({ where: req.query }).then(cat => res.status(201).json(cat));
});

app.get('/cats/:id', (req, res) => {
    Cat.findByPk(req.params.id).then(cat => res.status(201).json(cat));
});

app.patch('/cats/:id', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.id } }).then(cat => res.status(200).json(cat));
});

app.patch('/feed/cat/:id', (req, res) => {
    const lastFed = { lastFed: new Date() };
    Cat.update(lastFed, { where: { id: req.params.id } }).then(cat => res.status(201).json(cat));
});

app.delete('/cats/:id', (req, res) => {
    const ID_TO_DESTROY = req.params.id;

    Cat.destroy({ where: { id: ID_TO_DESTROY } }).then(cat => res.status(201).json(cat));
});



module.exports = app;