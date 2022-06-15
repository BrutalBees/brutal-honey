const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
	productName: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
			notEmpty: true
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
				notEmpty: true
		}
},
  description: {
      type: Sequelize.TEXT,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  }
  },
  category: {
      type: Sequelize.ENUM('organic', 'raw', 'manuka'),
      defaultValue: 'organic'
  },
  imageUrl: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: ['https://res.cloudinary.com/hksqkdlah/image/upload/24728_sil-honey-gunters-pure-clover-honey-1.jpg']
  }
});

module.exports = Product;
