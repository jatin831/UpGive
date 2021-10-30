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
            next(err);
        } 
        User.find({_id: user.friends})
        .then(users => {
            res.json({users});
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
            next(err);
        }
        User.findById(userId)
        .then(user => {
            if (!user) {
                const err = new Error("Invalid UserId");
                err.statusCode = 400;
                next(err);
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