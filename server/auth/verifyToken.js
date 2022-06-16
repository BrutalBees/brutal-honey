const { models: { User }} = require('../db');

// Middleware function to verify token
const verifyToken = async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    req.user = user;
    next();
  } catch (error) {
    next(error)
  }
};

module.exports = verifyToken;
