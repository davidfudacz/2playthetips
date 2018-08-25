const router = require('express').Router()
const { Review } = require('../db/models')

router.param('id', async (req, res, next, id) => {
  try {
    req.review = await Review.findById(id)
    next()
  }
  catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  const { clubbCourseId, status } = req.query
  if (clubbCourseId && status) {
    const reviews = await Review.findAll({
      where: {
        clubbCourseId,
        status,
      }
    })
    // in the event that there is more than one published, take the newer one
    reviews.sort((a, b) => b.updatedAt - a.updatedAt)
    res.json(reviews[0])
  }
  else next()
})

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll()

    res.json(reviews)
  }
  catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  res.json(req.review)
})

module.exports = router