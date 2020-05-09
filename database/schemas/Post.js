const Sequelize = require('sequelize')
const database = require('../index')

const Post = database.define('posts', {
  title: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  content: Sequelize.TEXT,
})

module.exports = Post

