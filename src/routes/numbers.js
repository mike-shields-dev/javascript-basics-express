const { Router } = require('express');
const { add, subtract, multiply } = require('../lib/numbers');

const router = Router();

router
  .get('/add/:number1/and/:number2', (req, res) => {
    const { number1, number2 } = req.params;
    if (Number.isNaN(Number(number1)) || Number.isNaN(Number(number2))) {
      return res.status(400).json({ error: 'Parameters must be valid numbers.' });
    }
    return res.status(200).json({ result: add(+number1, +number2) });
  })
  .get('/subtract/:number1/from/:number2', (req, res) => {
    const { number1, number2 } = req.params;
    if (Number.isNaN(Number(number1)) || Number.isNaN(Number(number2))) {
      return res.status(400).json({ error: 'Parameters must be valid numbers.' });
    }
    return res.status(200).json({ result: subtract(+number2, +number1) });
  })
  .post('/multiply', (req, res) => {
    const { a, b } = req.body;
    return res.status(200).json({ result: multiply(a, b) });
  });

module.exports = router;
