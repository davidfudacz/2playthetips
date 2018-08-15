const router = require('express').Router()
const { courseRating } = require('../db/models')
const axios = require('axios')
const { clubbUrl } = require('../urls')

router.get('/', async (req, res, next) => {
  try {
    const courseRatings = await courseRating.findAll()
    const outputCourseRatings = await courseRatings.map(async rating => {
      try {
        const courseInfo = await axios.get(`${clubbUrl}/api/courses/${rating.clubbCourseId}?include=club`)
        rating.dataValues.course = courseInfo.data
        return rating
      }
      catch (err) {
        console.error(err)
      }

    })
    const output = await Promise.all(outputCourseRatings)
    res.json(output)
  }
  catch (err) {
    console.error(err)
  }
})

module.exports = router