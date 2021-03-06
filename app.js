require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/post', postRouter)

app.listen(process.env.PORT, function(){
  console.log(`Application is available at port : ${process.env.PORT}`)
})

module.exports = app
