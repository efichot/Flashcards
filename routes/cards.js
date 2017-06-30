import express from 'express';

const router = express.Router();
const data = require('../data/flashcardData.json').data;

const cards = data.cards;

router.get('/', (req, res) => {
    const numberOfCards = cards.length;
    const id = Math.floor(Math.random() * numberOfCards);
    const text = cards[id].question;
    const hint = cards[id].hint;
    const templateData = { text, hint };
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer';

    res.render('card', templateData);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { side } = req.query;

    if (!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }

    const text = cards[id][side];
    const { hint } = cards[id];
    const name = req.cookies.username;
    const templateData = { text, hint, name };

    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else {
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    return res.render('card', templateData);
});


module.exports = router;