const express = require('express')
const router = express.Router()
const upload = require('../utils/multer')
const {
  allProducts,
  createNew,
  newForm,
  showProduct,
  seedStarter,
  clearSeedStarter,
  deleteProduct,
  editForm,
  updateProduct,
  updateQuantity
} = require('../controllers/product-controller')

// get all products
router.get('/', allProducts)

// get new form
router.get('/new', newForm)

// delete a single product
router.delete('/:id', deleteProduct)

// purchase a product
router.put('/:id/purchase', updateQuantity)

// update product
router.put('/:id', upload.single('image'), updateProduct)

// create a new product
router.post('/', upload.single('image'), createNew)

// get edit form
router.get('/:id/edit', editForm)

// get product seed
router.get('/seed', seedStarter)

// clear product seed
router.get('/clear', clearSeedStarter)

// show a single product
router.get('/:id', showProduct)

module.exports = router
