
const { courseRating } = require('../../server/db/models')

const seedCourseRatings = async () => {
  const courseRatings = await Promise.all([
    courseRating.create({
      clubbCourseId: 1,
      shot: 8,
      short: 8,
      fairness: 7,
      experience: 4,
      aura: 5,
      omg: 6,
      design: 6,
      assKick: 10,
    }),
    courseRating.create({
      clubbCourseId: 2,
      shot: 8,
      short: 8,
      fairness: 7,
      experience: 4,
      aura: 5,
      omg: 6,
      design: 6,
      assKick: 10,
    }),
  ])

  console.log(`seeded ${courseRatings.length} course ratings`)
}

module.exports = seedCourseRatings