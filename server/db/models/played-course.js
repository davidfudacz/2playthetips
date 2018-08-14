const Sequelize = require('sequelize')
const db = require('../db')

const playedCourse = db.define('playedCourse',{
  clubbCourseId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = playedCourse
