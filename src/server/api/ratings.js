const express = require('express');
const router = express()

router.get('/', async (req, res, next) => {
  try {
    res.send('YEP, HELLO from Express Backend Test Route')
  } catch(err) {
    next(err)
  }
})


//add thumbs up rating
router.put('/up', async (req, res, next) => {
  try {
    res.send('Hello /up ROUTE')
  } catch(err) {
    next(err)
  }
})

//add thumbs down rating
router.put('/down', async (req, res, next) => {
  try {
    res.send('Hello /up ROUTE')
  } catch(err) {
    next(err)
  }
})

module.exports = router;