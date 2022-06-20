const router = require('express').Router();
const verifyToken = require('../auth/verifyToken');
const { models: { User }} = require('../db');
module.exports = router;

// GET /api/users
router.get('/', verifyToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const users = await User.findAll({
        attributes: ['id', 'email', 'firstName', 'lastName', 'isAdmin'] // only sends back these attributes
      })
      res.json(users)
    } else {
      res.status(401).send('User does not have admin access')
    }
  } catch (err) {
    next(err)
  }
});

