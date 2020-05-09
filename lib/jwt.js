const jwt = require('jsonwebtoken');
const jwtMiddleware = require('express-jwt')


const sign = (data) =>
  jwt.sign(data, process.env.JWT_SECRET_KEY);

const middleware = jwtMiddleware({
  secret: process.env.JWT_SECRET_KEY,
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  },
})

module.exports = {
  sign, middleware,
}