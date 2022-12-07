const express = require('express');
const router = express.Router();

router.get('/temporary', (req, res) => {
  res.redirect(307, "/redirect/destination")
})

router.get('/destination', (req, res) => {
  res.send('This is the redirect destination')
})

router.get('/permanent', (req, res) => {
  res.redirect(301, "/redirect/destination")
})

router.get('/multi', (req, res) => {
  res.redirect(301, "http://" +  getHostname(req.headers.host) + "/redirect/temporary")
})

// use this to get around the fact the host header is different when behind nginx (i.e. `localhost` vs `localhost:8081`)
function getHostname(hostname) {
  let url = hostname.split(':')
  if (url.length == 1) {
    return hostname + ":8081" // assume 8081 for nginx
  }

  return hostname
}

module.exports = router;
