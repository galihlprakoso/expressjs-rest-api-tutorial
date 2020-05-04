const Sequelize = require('sequelize')
const database = require('../index')
const User = require('./User')

const Post = database.define('posts', {
  title: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  content: Sequelize.TEXT,
})

Post.belongsTo(User)

module.exports = Post

