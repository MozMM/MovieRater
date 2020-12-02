const express = require('express');
const router = express()
const { Ratings } = require('../db/models')

// get rating
router.get('/:id', async (req, res, next) => {
  try {
    let selectedMovieRatings = await Ratings.findOne({
      where: {
        movieId: req.params.id,
      },
      attributes: ['thumbsUp', 'thumbsDown']
    })
    res.json(selectedMovieRatings)
  } catch(err) {
    next(err)
  }
})

//add thumbs up rating
router.post('/:id/up', async (req, res, next) => {
  try {
    let movieInstance = await Ratings.findOrCreate({
      where: {
        movieId: req.params.id
      },
    })
    const updatedMovieRating = await movieInstance[0].increment('thumbsUp')
    res.json(updatedMovieRating)
  } catch(err) {
    next(err)
  }
})

//add thumbs down rating
router.post('/:id/down', async (req, res, next) => {
  try {
    let movieInstance = await Ratings.findOrCreate({
      where: {
        movieId: req.params.id
      },
    })
    const updatedMovieRating = await movieInstance[0].increment('thumbsDown')
    res.json(updatedMovieRating)
  } catch(err) {
    next(err)
  }
})

module.exports = router;
