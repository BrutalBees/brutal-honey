const router = require('express').Router();
const Product = require('../db/models/Product');

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
