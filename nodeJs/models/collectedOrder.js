const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Object with timestamp: true is for ad createdAt & updatedAt to my document
const opts = {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Date.now().toISOString().split('T')[0] },
  };
const collectedOrderSchema = new Schema(
    {
        resturantId: {
            type: Schema.Types.ObjectId,
            ref: 'Resturant',
        },
        subtotalOrderPrice: {
            type: Number,
        },
        deliveryFees: {
            type: Number,
        },
        taxFees: {
            type: Number
        },
        discount: {
            type: Number
        },
        usersCount: {
            type: Number
        },
        status: {
            type: String
        },
        createdOn: {
            type: String
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