// API/PRODUCTS ROUTES
const router = require('express').Router();
const {
  models: { Product },
} = require('../db');
module.exports = router;

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: req.query,
    });
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});
