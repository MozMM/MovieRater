const express = require('express');
const router = express()

//to ratings routes
router.use('/ratings', require('./ratings'))

router.use(function (req, res, next) {
  const err = new Error('Sorry, that data was not found.');
  err.status = 404;
  next(err);
});

module.exports = router;