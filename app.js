require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
app.use('/', indexRouter)
app.use('/auth', authRouter)

app.listen(process.env.PORT, function(){
  console.log(`Application is available at port : ${process.env.PORT}`)
})

module.exports = app
