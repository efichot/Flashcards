// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

// need to tell express to use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', { prompt: 'Who is buried in Grants tomb?', hint: 'Think about whose tomb it is.' });
});

app.get('/hello', (req, res) => {
	res.render('hello', { name: req.cookies.username });
});

app.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.render('hello', { name: req.body.username });
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});