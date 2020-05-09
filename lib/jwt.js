var jwt = require('jsonwebtoken');

const sign = (data) =>
  jwt.sign(data, process.env.JWT_SECRET_KEY);

module.exports = {
  sign
}