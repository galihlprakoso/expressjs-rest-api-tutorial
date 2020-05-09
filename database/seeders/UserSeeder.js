const User = require('../schemas/User')
const hasher = require('../../lib/hasher')

const UserSeeder = async () => {
  await User.create({
    name: 'Galih Laras Prakoso',
    email: 'galih@ghack.dev',
    password: hasher.hash('password'),
  })
}

module.exports = UserSeeder