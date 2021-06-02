const mongoose =require('mongoose');

const TranactionSchema = new mongoose.Schema({
    text:{ 
        type:String,
        trim: true,
        required:[true,'Please add some text']
    },
    amount:{
        type:Number,
        required: [true,'Please add a possitive or negative number']
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Transaction',TranactionSchema);