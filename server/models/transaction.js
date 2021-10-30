const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        friends: [Schema.Types.ObjectId],
        
    },
    {
        timestamps: true,
        usePushEach: true
    }
)

module.exports = mongoose.model('User', transactionSchema);