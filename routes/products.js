const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/ProductController');
const { authentication } = require('../middleware/authentication');

router.post('/',authentication, ProductController.create);
router.put('/id/:id',authentication, ProductController.update)
router.get('/', ProductController.getAll)
router.get('/id/:id', ProductController.getById)
router.get('/name/:name', ProductController.getOneByName)
router.get('/price/:price', ProductController.getByPrice)
router.get('/orderedbyprice', ProductController.orderByPrice)




router.delete('/id/:id',authentication, ProductController.delete)

module.exports = router;