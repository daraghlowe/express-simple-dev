const compression = require('compression');
const express = require('express');
const router = express.Router();

router.get('/gzip', compression(), (req, res) => {
  res.send('gzip request '.repeat(1000));
})

router.get('/return-accept-encoding-value', compression(), (req, res) => {
  res.set('Accept-Encoding', req.headers['accept-encoding']) // undefined when no header present
  res.send('This request returns the Accept-Encoding value: ' + req.headers['accept-encoding'])
})

module.exports = router;
