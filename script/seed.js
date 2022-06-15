'use strict'

const {db, models: {User, Product} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = [{ email: 'grace@gmail.com', firstName: 'Grace', lastName:'Shopper', password: '123' }];

  const [grace] = await Promise.all(users.map(user => User.create(user)));

  // Creating Products
  const products = [
    {
      productName: "Nature Nate\'s 100% Pure, Raw & Unfiltered Honey",
      price: 10,
      description: "Nature Nate's 100% Pure, Raw & Unfiltered Honey is a sweetener as nature intended. One ingredient: Honey. All we add is the bottle",
      category: "organic",
      imageUrl: ["https://images-na.ssl-images-amazon.com/images/I/41euxoYwTIL._SX300_SY300_QL70_FMwebp_.jpg"]
    },
    {
      productName: "Kiva Raw Manuka Honey",
      price: 40,
      description: "Genuine Manuka honey harvested from the remote and pristine hills, forest, and coastal areas of New Zealand",
      category: "organic",
      imageUrl: [" https://m.media-amazon.com/images/I/513whGsJxeL._AC_SR480,480_.jpg"]
    },
    {
      productName: "Subee",
      price: 20,
      description: "From hive to Table! Gently filtered to remove hive debris & prevent granulation, our honey is available in packets, squeeze bears, bottles & jars. It's perfect for baking, BBQ, as a sweetener & more!",
      category: "manuka",
      imageUrl: ["https://images-na.ssl-images-amazon.com/images/I/41Ob1%2BOxFYL._SX300_SY300_QL70_FMwebp_.jpg"]
    }
  ];

  const [ natures, kiva, subee] = await Promise.all(products.map(product => Product.create(product)));

  // Setting User-Product Associations (Creating Cart)
  await grace.setProducts([ natures, kiva, subee]);

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
