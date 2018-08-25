const router = require('express').Router()
const { Review } = require('../db/models')
const axios = require('axios')
const { clubbUrl } = require('../urls')

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
  try {
    const reviews = await Review.findAll()
    res.json(reviews)
  }
  catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  res.json(req.review)
})

module.exports = router