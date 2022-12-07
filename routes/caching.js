const express = require('express');
const router = express.Router();

router.get('/public', (req, res) => {
  let cache_value = 'public, max-age=300'
  res.set('Cache-control', cache_value)
  res.send('This request has the cache Control header value: ' + cache_value)
})

router.get('/no-cache-control', (req, res) => {
  res.send('This request has no cache Control header')
})

router.get('/cache-control', (req, res) => {
  res.set('Cache-control', "max-age=10")
  res.send('This request has a cache Control header')
})

router.get('/no-cache.css', (req, res) => {
  res.type('text/css')
  res.send('This CSS file has no cache Control header')
})

router.get('/cache-control-no-store.json', (req, res) => {
  res.type('application/json')
  res.set('Cache-Control', "no-store")
  res.send('This JSON file has a no-cache Control header')
})

module.exports = router;
