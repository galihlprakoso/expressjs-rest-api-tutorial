const Post = require('../database/schemas/Post')

module.exports = {
  getPosts: async (req, res) => {
    const posts = await Post.findAll()
    res.json(posts)
  },
  getUserPosts: (req, res) => {

  },
  onePost: (req, res) => {

  },
  createPost: async (req, res) => {

    const post = Post.build(req.body)
    try {
      await post.save()
      res.json({ message: 'Post created successfully.'})
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },
  updatePost: async (req, res) => {
    
  },
  deletePost: (req, res) => {

  }
}