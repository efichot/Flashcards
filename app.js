//const express = require('express');
import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('I love Treehouse!');
});

app.listen(3000);