const database = require('../index')

const Schemas = async () => {
  console.log('Running all migrations...')
  await database.drop()
  await database.sync({ force: true })
  console.log('Migrations completed...')
}

Schemas()