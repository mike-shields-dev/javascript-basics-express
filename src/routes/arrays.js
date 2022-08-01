const { Router } = require('express');

const { getNthElement, arrayToCSVString } = require('../lib/arrays');

const router = Router();

router.post('/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  return res.status(200).json({ result: getNthElement(index, array) });
});

module.exports = router;
