const { Router } = require('express');
const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

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
    if (!a || !b) {
      return res.status(400).json({ error: `Parameters "a" and "b" are required.` });
    }
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
      return res.status(400).json({ error: `Parameters "a" and "b" must be valid numbers.` });
    }
    return res.status(200).json({ result: multiply(a, b) });
  })
  .post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (Number(b) === 0) {
      return res.status(400).json({ error: `Unable to divide by 0.` });
    }
    if (a === undefined || b === undefined) {
      return res.status(400).json({ error: `Parameters "a" and "b" are required.` });
    }
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
      return res.status(400).json({ error: `Parameters "a" and "b" must be valid numbers.` });
    }
    return res.status(200).json({ result: divide(a, b) });
  })
  .post('/remainder', (req, res) => {
    const { a, b } = req.body;
    return res.status(200).json({ result: remainder(a, b) });
  });

module.exports = router;
