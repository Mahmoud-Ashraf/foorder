const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Object with timestamp: true is for ad createdAt & updatedAt to my document
const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    resturantId: {
        type: Schema.Types.ObjectId,
        ref: 'Resturant',
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    deliveryFees: {
        type: Number,
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Menu',
            required: true
        }
    ]
},
    { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);