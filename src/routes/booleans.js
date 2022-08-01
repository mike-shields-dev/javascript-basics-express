const { Router } = require('express');

const { negate, truthiness } = require('../lib/booleans');

const router = Router();

router
  .post('/negate', (req, res) => {
    const { value } = req.body;
    res.status(200).json({ result: negate(value) });
  })
  .post('/truthiness', (req, res) => {
    const { value } = req.body;
    res.status(200).json({ result: truthiness(value) });
  });

module.exports = router;
