const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId; 
const User = require('../models/user');

exports.getFriends = (req, res, next) => {
    User.findById(req.query.userId)
    .then(user => {
        if (!user) {
            const err = new Error("Invalid UserId");
            err.statusCode = 400;
            return next(err);
        } 
        User.find({_id: user.friends})
        .then(users => {
            let friendsData = users.map(user => ({
                _id: user._id,
                email: user.email,
                name: user.name
            }))
            
            res.json(friendsData);
        })
        .catch(err => {
            next(err);
        })
    })
    .catch(err => {
        next(err);
    })   
}

exports.addFriend = (req, res, next) => {
    const userId = req.body.userId;
    const friendsEmail = req.body.friendsEmail;
    User.findOne({email: friendsEmail})
    .then(friend => {
        if (!friend) {
            const err = new Error("Invalid Friend's Email");
            err.statusCode = 400;
            return next(err);
        }
        
        if (friend.friends.indexOf(new ObjectId(userId)) > -1) {
            const err = new Error("Already added as a friend.");
            err.statusCode = 400;
            return next(err);
        }

        User.findById(userId)
        .then(user => {
            if (!user) {
                const err = new Error("Invalid UserId");
                err.statusCode = 400;
                return next(err);
            }
            user.friends.push(friend._id);
            friend.friends.push(userId);
            return user.save();
        })
        .then(result => {
            return friend.save();
        })
        .then(result => {
            res.json({message: "Friend added successfully!"});
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.getTransactionStatus = (req, res, next) => {
    User.findById(req.query.userId)
    .then(user => {
        if (!user) {
            const err = new Error("Invalid UserId");
            err.statusCode = 400;
            next(err);
        } 
        res.json({
            netBalance: user.netBalance,
            credit: user.credit,
            debit: user.debit
        })
    })
    .catch(err => {
        next(err);
    })
}

exports.getTransactionsHistory = (req, res, next) => {
    User.findById(req.query.userId).populate('transactions')
        .then(user => {
            if (!user) {
                const err = new Error("Invalid UserId");
                err.statusCode = 400;
                return next(err);
            }
            res.json(user.transactions);
        })
        .catch(err => {
            next(err);
        })
}

exports.getFriendsYouOwe = (req, res, next) => {
    User.findById(req.query.userId)
        .then(user => {
            if (!user) {
                const err = new Error("Invalid UserId");
                err.statusCode = 400;
                return next(err);
            }
            res.json(user.friendsYouOwe);
        })
        .catch(err => {
            next(err);
        })
}

exports.settleDebt = async (req, res, next) => {
    const {amount, userId, friendId, transactionId} = req.body;
    await User.findById(userId)
        .then(user => {
            if (!user) {
                const err = new Error("Invalid UserId");
                err.statusCode = 400;
                return next(err);
            }
            user.netBalance += amount;
            user.credit += amount;
            user.friendsYouOwe = user.friendsYouOwe.filter(friend => {
                return friend.transactionId.toString() !== transactionId;
            })
            user.save();
        })
        .catch(err => {
            next(err);
        })

    await User.findById(friendId)
        .then(user => {
            if (!user) {
                const err = new Error("Invalid UserId");
                err.statusCode = 400;
                return next(err);
            }
            user.netBalance -= amount;
            user.friendsYouOwed = user.friendsYouOwed.filter(friend => {
                return friend.transactionId.toString() !== transactionId;
            })
            user.save().then(userSaved => {
                res.json({message: "Debt settled successfully!"});
            })
        })
        .catch(err => {
            next(err);
        })
}