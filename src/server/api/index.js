const express = require('express');
const router = express()

//to ratings routes
router.use('/ratings', require('./ratings'))

router.use(function (req, res, next) {
  const err = new Error('Nope not found.');
  err.status = 404;
  next(err);
});

module.exports = router;