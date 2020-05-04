const { validationResult } = require('express-validator');

module.exports = {
  login: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Login succeed'})
  },
  register: (req, res) => {

  }
}