const Sequelize = require('sequelize')
const database = require('../instance')

const User = database.define('users', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
})

module.exports = User

