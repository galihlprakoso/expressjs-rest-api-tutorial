const { checkSchema } = require('express-validator')

const loginSchema = {
  name: {
    isLength: {
      errorMessage: 'Password should be at least 3 chars long',
      options: { min: 3 }
    },
  },
  email: {
    isEmail: {
      errorMessage: 'This field should be a valid email address',      
    }
  },
  password: {    
    isLength: {
      errorMessage: 'Password should be at least 7 chars long',
      options: { min: 7 }
    },
  },
}

module.exports = checkSchema(loginSchema)