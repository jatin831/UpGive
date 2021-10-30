const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
        
    },
    {
        timestamps: true,
        usePushEach: true
    }
)

module.exports = mongoose.model('User', transactionSchema);