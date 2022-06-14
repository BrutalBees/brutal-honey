//this is the access point for all things database related!

const db = require('./db');
const Sequelize = require('sequelize');

const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');

// Model Associations

// One to One
User.hasOne(Cart);
Cart.belongsTo(User);

// Many to Many
const cart_product = db.define('cart_product', {
  quantity: {
    type: Sequelize.INTEGER
  }
});

Cart.belongsToMany(Product, { through: cart_product });
Product.belongsToMany(Cart, { through: cart_product });

module.exports = {
  db,
  models: {
    User,
    Product, 
    Cart
  },
};
