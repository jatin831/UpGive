const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    debt: {
        type: Number,
        required: true
    }
})

const transactionSchema = new Schema({
        description: {
            type: String,
            required: true
        },
        groupName: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        paidBy: {
            type: Schema.Types.ObjectId,
            required: true
        },
        splitType: {
            type: String,
            required: true
        },
        friends: [friendSchema]
    },
    {
        timestamps: true,
        usePushEach: true
    }
)

module.exports = mongoose.model('Transaction', transactionSchema);