const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendsYouOweSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    friendId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    transactionId: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    },
    transactionDescription: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    }
})

const friendsYouOwedSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    friendId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    transactionId: {
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    },
    transactionDescription: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    }
})

const userSchema = new Schema({
        email: {
            type: String,
            required: true 
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        contact: {
            type: Number,
            required: true
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        netBalance: {
            type: Number,
            default: 0.0
        },
        credit: {
            type: Number,
            default: 0.0
        },
        debit: {
            type: Number,
            default: 0.0
        },
        transactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Transaction'
            }
        ],
        friendsYouOwe: [friendsYouOweSchema],
        friendsYouOwed: [friendsYouOwedSchema]
    },
    {
        timestamps: true,
        usePushEach: true
    }
)

module.exports = mongoose.model('User', userSchema);