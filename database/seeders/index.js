const UserSeeder = require('./UserSeeder')

const Seeder = async () => {
  console.log('Excecuting all seeders...')
  await UserSeeder()
  console.log('All seeders have successfully executed...')
}

Seeder()