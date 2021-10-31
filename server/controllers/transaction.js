const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId; 
const User = require('../models/user');
const Transaction = require('../models/transaction');

exports.createTransaction = (req, res, next) => {
    let amount = req.body.amount;
    
    const friends = req.body.friends.map(friend => {
        let debt = amount * friend.percentage / 100;
        if (req.body.paidBy === friend.id) {
            debt -= amount;
        }
        return {...friend, debt: debt};
    })

    const transaction = new Transaction({
        description: req.body.description,
        groupName: req.body.groupName,
        amount: req.body.amount,
        paidBy: req.body.paidBy,
        splitType: req.body.splitType,
        friends: friends
    })

    let userWhoPaid;
    User.findById(req.body.paidBy)
        .then(user => {
            if (!user) {
                const err = new Error("Invalid UserId");
                err.statusCode = 400;
                return next(err);
            }
            userWhoPaid = user;
        })
        .catch(err => {
            next(err);
        })

    transaction.save()
        .then(async transactionResult => {
            for (const friend of friends) {
                await User.findById(friend.id)
                    .then(user => {
                        user.transactions.push(transactionResult._id);
                        if (friend.debt >= 0) {
                            user.debit += friend.debt;

                            user.friendsYouOwe.push({
                                friendId: userWhoPaid._id,
                                amount: friend.debt,
                                date: transactionResult.createdAt,
                                transactionId: transactionResult._id,
                                transactionDescription: transactionResult.description,
                                groupName: transactionResult.groupName
                            })

                            userWhoPaid.friendsYouOwed.push({
                                friendId: friend.id,
                                amount: friend.debt,
                                date: transactionResult.createdAt,
                                transactionId: transactionResult._id,
                                transactionDescription: transactionResult.description,
                                groupName: transactionResult.groupName
                            })
                        } else {
                            user.credit -= friend.debt;
                        }
                        user.netBalance -= friend.debt;

                        user.save();
                    })
            }
            userWhoPaid.save().then(results => {
                res.json({message: "Transaction Successful"});
            })
            .catch(err => {
                next(err);
            })
        })
        .catch(err => {
            next(err);
        })
}

