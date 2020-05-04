const { checkSchema } = require('express-validator')

const postSchema = {
  title: {
    errorMessage: 'Title should be at least 3 characters',
    isLength: { min: 5 },
    isString: true,
  },
  content: {
    errorMessage: 'Content should be at least 5 characters',
    isLength: { min: 5 },
    isString: true,
  },
  thumbnail: {
    errorMessage: 'Thumbnail should be an image',
    isMimeType: 'image/*',
  }
}

module.exports = checkSchema(postSchema)

