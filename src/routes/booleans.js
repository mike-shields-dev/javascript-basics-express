const { Router } = require('express');

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const router = Router();

function requireParamIsNumber(req, res, next) {
  const { value } = req.params;
  if (Number.isNaN(Number(value))) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  return next();
}

function requireParamIsChar(req, res, next) {
  const { character } = req.params;
  if (character.length !== 1) {
    return res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  return next();
}

router
  .post('/negate', (req, res) => {
    const { value } = req.body;
    return res.status(200).json({ result: negate(value) });
  })
  .post('/truthiness', (req, res) => {
    const { value } = req.body;
    return res.status(200).json({ result: truthiness(value) });
  })
  .get('/is-odd/:value', requireParamIsNumber, (req, res) => {
    const { value } = req.params;
    return res.status(200).json({ result: isOdd(value) });
  })
  .get('/cat/starts-with/:character', requireParamIsChar, (req, res) => {
    const { character } = req.params;
    return res.status(200).json({ result: startsWith(character, 'cat') });
  });

module.exports = router;
