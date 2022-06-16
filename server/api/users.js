const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router;

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const accessUser = await User.findByToken(req.headers.authorization);
    if (accessUser.isAdmin) {
      const users = await User.findAll({
        attributes: ['id', 'email', 'firstName', 'lastName'] // only sends back these attributes
      })
      res.json(users)
    } else {
      throw new error
    }
  } catch (err) {
    next(err)
  }
})

