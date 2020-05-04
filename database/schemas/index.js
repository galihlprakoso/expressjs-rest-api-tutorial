const User = require('../schemas/User')

const Schema = async () => {
  console.log('Running database migrations...')  
  await User.sync({ force: true })
  console.log('Database migrated successfully.')
}

Schema()