const { Router } = require('express');

const { negate } = require('../lib/booleans');

const router = Router();

router.post('/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});

module.exports = router;
