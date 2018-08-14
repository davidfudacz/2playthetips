const Sequelize = require('sequelize')
const db = require('../db')

const lowScore = db.define('lowScore',{
  clubbCourseId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

module.exports = lowScore
