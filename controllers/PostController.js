const Post = require('../database/schemas/Post')
const User = require('../database/schemas/User')
const validate = require('./utils/validate')
const authenticate = require('./utils/authenticate')

User.hasMany(Post)
Post.belongsTo(User)

module.exports = {
  getPosts: async (req, res) => {
    const posts = await Post.findAll({
      include: [{ model: User }]
    })
    res.json(posts)
  },
  getPost: async (req, res) => {    
    const post = await Post.findOne({ where: { id: req.params.id }, include: [{ model: User }] })
    if(post) {
      return res.json({
        data: { post }
      })
    }
    res.status(404).json({ errors: [{ msg: 'Post not found' }] })
  },

  getUserPosts: async (req, res) => {
    console.log('test')
    if(!authenticate(req, res)) return
    let user = await User.findOne({
      where: {id: req.user.id},
      include: [{ model: Post }]
    })
    user = user.get({ plain: true })
    res.json({
      data: { posts: user.posts }
    })
  },
  getUserPost: async (req, res) => {
    if(!authenticate(req, res)) return
    let user = await User.findOne({
      where: {id: req.user.id},
      include: [{ 
        model: Post,
        where: {id: req.params.id}
      }]
    })
    if(!user || user.posts.length === 0) {
      return res.status(404).json({ errors: [{ msg: 'Post not found' }] })
    }
    user = user.get({ plain: true })    
    res.json({
      data: { post: user.posts[0] }
    })
  },  
  createPost: async (req, res) => {
    if(!authenticate(req, res)) return
    if(!validate(req, res)) return

    const user = await User.findOne({
      where: {id: req.user.id},
    })

    const post = Post.build(req.body)
    post.setUser(user)
    try {
      await post.save()
      res.json({ data: { msg: 'Post created successfully.' } })
    } catch (err) {
      res.status(500).json({ errors: [{ msg: err.message }] })
    }
  },
  updatePost: async (req, res) => {
    if(!authenticate(req, res)) return
    if(!validate(req, res)) return

    let user = await User.findOne({
      where: {id: req.user.id},
      include: [{ 
        model: Post,
        where: {id: req.params.id}
      }]
    })
    if(!user || user.posts.length === 0) {
      return res.status(404).json({ errors: [{ msg: 'Post not found' }] })
    }
    const post = user.posts[0]
    post.title = req.body.title
    post.content = req.body.content
    post.thumbnail = req.body.thumbnail

    try {
      await post.save()
      res.json({ data: { msg: 'Post updated successfully.' } })
    } catch (err) {
      res.status(500).json({ errors: [{ msg: err.message }] })
    }
  },
  deletePost: async (req, res) => {
    if(!authenticate(req, res)) return
    if(!validate(req, res)) return

    const user = await User.findOne({
      where: {id: req.user.id},
      include: [{ 
        model: Post,
        where: {id: req.params.id}
      }]
    })
    if(!user || user.posts.length === 0) {
      return res.status(404).json({ errors: [{ msg: 'Post not found' }] })
    }
    const post = user.posts[0]

    try {
      await post.destroy()
      res.json({ data: { msg: 'Post deleted successfully.' } })
    } catch (err) {
      res.status(500).json({ errors: [{ msg: err.message }] })
    }
  }
}