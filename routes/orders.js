const express = require('express');

const router = express.Router();

const OrderController = require('../controllers/OrderController')

router.post('/',OrderController.getAll)

module.exports = router;