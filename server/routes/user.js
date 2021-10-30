const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/getFriends', userController.getFriends);
router.post('/addFriend', userController.addFriend);

module.exports = router; 