module.exports = (req, res) => {
  if (!req.user){
    res.status(401).json({ errors: [{ 
      msg: 'You need be authenticated to access this route.',
    }]})
    return false
  }
  return true
}