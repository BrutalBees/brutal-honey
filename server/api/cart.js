const router = require('express').Router();
const Cart = require('../db/models/cart')


router.get('/', async (req, res, next) => {
  try {
    res.json(req.cart)
  } catch (err) {
    next(err)
  }
});