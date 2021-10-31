const express = require('express');

const router = express.Router();

const transactionController = require('../controllers/transaction');

router.post('/createTransaction', transactionController.createTransaction)

module.exports = router; 