const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Object with timestamp: true is for ad createdAt & updatedAt to my document
const collectedOrderSchema = new Schema(
    {
        resturantId: {
            type: Schema.Types.ObjectId,
            ref: 'Resturant',
            required: true
        },
        subtotalOrderPrice: {
            type: Number,
            required: true
        },
        deliveryFees: {
            type: Number,
        },
        taxFees: {
            type: Number
        },
        usersCount: {
            type: Number
        },
        items: [
            {
                count: {
                    type: Number,
                    required: true
                },
                item: {
                    type: Schema.Types.ObjectId,
                    ref: 'Menu',
                    required: true
                }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model('CollectedOrder', collectedOrderSchema);