const User = require('./user')
const courseRating = require('./course-rating')
const lowScore = require('./low-score')
const playedCourse = require('./played-course')

playedCourse.belongsTo(User)
User.hasMany(playedCourse)

lowScore.belongsTo(User)
User.hasMany(lowScore)

module.exports = {
  User,
  playedCourse,
  lowScore,
  courseRating,
}
