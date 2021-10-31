const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/getFriends', userController.getFriends);
router.post('/addFriend', userController.addFriend);

router.get('/getTransactionStatus', userController.getTransactionStatus);
router.get('/getTransactionsHistory', userController.getTransactionsHistory);
router.get('/getFriendsYouOwe', userController.getFriendsYouOwe);
router.post('/settleDebt', userController.settleDebt);

module.exports = router; 