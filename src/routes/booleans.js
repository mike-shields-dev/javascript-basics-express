const { Router } = require('express');

const { negate, truthiness, isOdd } = require('../lib/booleans');

const router = Router();

function requireParamIsNumber(req, res, next) {
  const { value } = req.params;
  if (Number.isNaN(Number(value))) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
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
  });

module.exports = router;
