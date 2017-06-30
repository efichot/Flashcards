// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

// need to tell express to use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes/index.js');
const cardRoutes = require('./routes/cards.js');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

// catch 404
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// if error occurs
app.use((err, req, res, next) => {
	res.status(err.status);
	res.render('error', { err });
	next();
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});