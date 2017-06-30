import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		return res.render('index', { name });
	}
	return res.redirect('/hello');
});

router.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		return res.redirect('/');
	}
	return res.render('hello');
});

router.get('/goodbye', (req, res) => {
	res.clearCookie('username');
	return res.redirect('/hello');
});

router.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	return res.redirect('/');
});

module.exports = router;