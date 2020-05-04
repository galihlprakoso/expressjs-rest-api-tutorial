const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const hash = (plainText) => 
  bcrypt.hashSync(plainText, SALT_ROUNDS)

module.exports = hash