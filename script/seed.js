'use strict'

const {db, models: {User, Product} } = require('../server/db');
const Cart = require('../server/db/models/Cart');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = [
    {
      email: 'grace@gmail.com',
      firstName: 'Grace',
      lastName:'Shopper',
      password: '123'
    },
    {
      email: 'jia@gmail.com',
      firstName: 'Jia',
      lastName:'Shopper',
      password: '123'
    },
    {
      email: 'angel@gmail.com',
      firstName: 'Angel',
      lastName:'Shopper',
      password: '123'
    },
    {
      email: 'katie@gmail.com',
      firstName: 'Katie',
      lastName:'Shopper',
      password: '123'
    }
  ];

  const [grace, jia, angel, katie] = await Promise.all(users.map(user => User.create(user)));


  // Creating Products
  const products = [
    {
      productName: "Beekeeper's Naturals",
      price: 16,
      description: "Go raw or go home. Beekeeper\'s Naturals raw wildflower honey is a pure, all-natural, and healthy. Our raw wildflower honey comes from sustainable, local apiaries in Ontario, Canada and it\'s truly farm to bottle.",
      category: "raw",
      imageUrl: ["https://img.thrivemarket.com/store/full/6/2/628055142058-1_1_1.jpg"]
    },
    {
      productName: "Thrive Market",
      price: 8,
      description: "Made from nectar collected from wildflower fields spanning Mexico and Argentina and ethically sourced from the hive, our Organic Raw Wildflower Honey is never pasteurized or filtered.",
      category: "raw",
      imageUrl: ["https://img.thrivemarket.com/store/full/6/7/671635708137-1_1_1.jpg"]
    },
    {
      productName: "Bloom Honey",
      price: 10,
      description: "Turmeric delicately blended with Bloom\'s Orange Blossom honey - Use this tasty “creamed honey” combo in tea to support overall health & wellness",
      category: "raw",
      imageUrl: ["https://img.thrivemarket.com/store/full/8/5/855990004640-1.jpg"]
    },
    {
      productName: "Kythnos Cyclades",
      price: 20,
      description: "“Stories of Greek Origins” Organic Thyme Honey from Kythnos Cyclades, is a distinguished honey with exceptional aroma and flavor , vivid golden color and taste of the highest quality.  It is surely an ultra premium, special gift of nature.",
      category: "organic",
      imageUrl: ["http://storiesofgreekorigins.com/image/cache/data/Organic-Thyme-Honey_photo_2-455x475.jpg"]
    },
    // {
    //   productName: "Local Hive",
    //   price: 20,
    //   description: "Made in the USA and straight from the hive - from our family to your family! Rice`s Honey proudly partners with local beekeepers around the country to provide only 100% pure, authentic, high quality, raw & unfiltered honey in a wide variety of local blends.",
    //   category: "raw",
    //   imageUrl: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576171343-lr-rice-southeast-honey-1576171328.jpg?crop=1xw:1xh;center,top&resize=768:*"]
    // },
    // {
    //   productName: "Nature Nate\'s",
    //   price: 10,
    //   description: "Nature Nate's 100% Pure, Raw & Unfiltered Honey is a sweetener as nature intended. One ingredient: Honey. All we add is the bottle",
    //   category: "organic",
    //   imageUrl: ["https://images-na.ssl-images-amazon.com/images/I/41euxoYwTIL._SX300_SY300_QL70_FMwebp_.jpg"]
    // },
    // {
    //   productName: "Kiva Raw Manuka Honey",
    //   price: 40,
    //   description: "Genuine Manuka honey harvested from the remote and pristine hills, forest, and coastal areas of New Zealand",
    //   category: "organic",
    //   imageUrl: [" https://m.media-amazon.com/images/I/513whGsJxeL._AC_SR480,480_.jpg"]
    // },
    // {
    //   productName: "Subee",
    //   price: 20,
    //   description: "From hive to Table! Gently filtered to remove hive debris & prevent granulation, our honey is available in packets, squeeze bears, bottles & jars. It's perfect for baking, BBQ, as a sweetener & more!",
    //   category: "manuka",
    //   imageUrl: ["https://cdn.shopify.com/s/files/1/0415/3455/4270/products/003791.jpg?v=1614673437"]
    // }
  ];
  const [ natures, kiva, subee] = await Promise.all(products.map(product => Product.create(product)));

  // Create Carts
  const carts = [
    {},
    {},
    {}
  ];
  const [cart1, cart2, cart3 ] = await Promise.all(carts.map(cart => Cart.create(cart)));

  // Set associations between users and carts
  await cart1.setUser(grace);
  await cart2.setUser(jia);
  await cart3.setUser(angel);

  // Set Cart-Product Associations
  await cart1.setProducts([ natures, kiva, subee]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}


/*
 We've separated the `seed` function from the `runSeed` function.
This way we can isolate the error handling and exit trapping.
The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
