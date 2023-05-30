const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/200', (req, res) => {
  res.sendStatus(200)
})

router.get('/404', (req, res) => {
  res.sendStatus(404)
})

router.get('/500', (req, res) => {
  res.sendStatus(500)
})

router.get('/headers', (req, res) => {
  res.send(JSON.stringify(req.headers, null, 4))
})

router.get('/favicon.ico', function (req, res) {
  const options = {
    root: path.join(__dirname, '../assets'),
    headers: {
      'Cache-Control': 'public, max-age=0',
    }
  }
  res.sendFile('favicon.ico', options)
})

module.exports = router;
