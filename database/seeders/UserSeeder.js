const User = require('../schemas/User')
const hasher = require('../../lib/hasher');

const UserSeeder = async () => {
  console.log('Running UserSeeder...')  
  await User.create({
    name: 'Galih Laras Prakoso',
    email: 'galih@ghack.dev',
    password: hasher('password'),
  }) 
  console.log('UserSeeder finished.')
}

module.exports = UserSeeder