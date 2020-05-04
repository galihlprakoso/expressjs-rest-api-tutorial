const PostSeeder = require('./PostSeeder')
const UserSeeder = require('./UserSeeder')

const Seeders = async () => {
  await UserSeeder()
  await PostSeeder()
}

Seeders()