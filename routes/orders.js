const express = require('express');

const router = express.Router();

const OrderController = require('../controllers/OrderController')

router.get('/',OrderController.getAll)
router.post('/create',OrderController.create)


module.exports = router;