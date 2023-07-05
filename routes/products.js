const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/ProductController')

router.post('/',ProductController.create);
router.put('/id/:id', ProductController.update)
router.delete('/id/:id', ProductController.delete)
router.get('/', ProductController.getAll)
router.get('/id/:id', ProductController.getById)
router.get('/name/:name', ProductController.getOneByName)

module.exports = router;