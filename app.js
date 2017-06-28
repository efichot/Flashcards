// const express = require('express');
import express from 'express'

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});