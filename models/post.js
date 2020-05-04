'use strict'
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    thumbnail: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    models.belongsTo(User);
  };
  return Post;
};