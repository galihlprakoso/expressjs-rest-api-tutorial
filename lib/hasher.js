const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const hash = (plainText) => 
  bcrypt.hashSync(plainText, SALT_ROUNDS)

const compare = (plainText, hashedText) =>
  bcrypt.compare(plainText, hashedText)

module.exports = {
  hash, compare
}