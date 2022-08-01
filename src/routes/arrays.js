const { Router } = require('express');

const { getNthElement, arrayToCSVString, addToArray2 } = require('../lib/arrays');

const router = Router();

router
  .post('/element-at-index/:index', (req, res) => {
    const { index } = req.params;
    const { array } = req.body;
    return res.status(200).json({ result: getNthElement(index, array) });
  })
  .post('/to-string', (req, res) => {
    const { array } = req.body;
    return res.status(200).json({ result: arrayToCSVString(array) });
  })
  .post('/append', (req, res) => {
    const { array, value } = req.body;
    return res.status(200).json({ result: addToArray2(value, array) });
  });

module.exports = router;
