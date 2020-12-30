const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '_test' : '')

// process.env is useful for deploying to heroku
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false
  }
)

module.exports = db

// if (process.env.NODE_ENV === 'test') {
//   afterAll(async () => await db.close());
// };
