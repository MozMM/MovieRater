const Sequelize = require('sequelize')
const db = require('../db')

const Ratings = db.define('ratings', {
  movieId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  thumbsUp: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  thumbsDown: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Ratings