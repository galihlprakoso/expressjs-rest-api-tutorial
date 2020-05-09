const { checkSchema } = require('express-validator')

const postSchema = {
  title: {    
    isLength: {
      options:  { min: 5 },
      errorMessage: 'Title should be at least 3 characters',
    },
  },
  content: {
    isLength: {
      options:  { min: 5 },
      errorMessage: 'Content should be at least 5 characters',
    },
  },
  thumbnail: {
    isURL: {
      errorMessage: 'Thumbnail should be a valid URL',
    },
  }
}

module.exports = checkSchema(postSchema)

