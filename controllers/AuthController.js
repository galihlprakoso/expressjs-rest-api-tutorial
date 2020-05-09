const { validationResult } = require('express-validator')
const hasher = require('../lib/hasher')
const jwt = require('../lib/jwt')
const User = require('../database/schemas/User')

module.exports = {
  login: async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    const user = await User.findOne({
      where: { email }, limit: 1,
    })
    if(!user) {
      return res.status(400).json({ errors: [{ 
        msg: 'There is no user with this email.',
        param: 'email',
      }]})
    }  
    const match = await hasher.compare(password, user.password)
    if(!match) {
      return res.status(400).json({ errors: [{ 
        msg: 'Wrong password.',
        param: 'password',
      }]})
    }
    res.json({
      msg: 'Login succeed.',
      data: {
        token: jwt.sign(user.get({
          plain: true
        }))
      }
    })
  },
  register: async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const checkUser = await User.findOne({
      where: { email: req.body.email }, limit: 1,
    })
    if(checkUser) {
      return res.status(400).json({ errors: [{ 
        msg: 'User with this email already exists.',
        param: 'email',
      }]})
    }

    const user = User.build(req.body)
    try {
      await user.save()
      res.json({
        msg: 'Registration succeed.',
        data: {
          token: jwt.sign(user.get({
            plain: true
          }))
        }
      })
    } catch (err) {
      res.status(500).json({ errors: [{ msg: err.message }] })
    }
  }
}