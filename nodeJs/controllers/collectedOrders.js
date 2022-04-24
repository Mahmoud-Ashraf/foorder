const CollectedOrder = require('../models/collectedOrder');
const { validationResult } = require("express-validator");

exports.addCollectedOrder = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation Faild, Enter data in correct format');
        error.statusCode = 422;
        throw error;
    }
    if (req.body.items.length <= 0) {
        const error = new Error('You haven\'t any Order to add');
        error.statusCode = 404;
        throw error;
    }
    const order = new CollectedOrder(req.body);
    order.save()
        .then(collectedOrder => {
            res.status(201).json({
                message: "Collected Order added successfully",
                collectedOrder: collectedOrder,
            });
        }).catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.getCollectedOrders = (req, res, next) => {
    const currentPage = req.query.page || 1;
    let perPage = req.query.perPage || 2;
    // let filter = req.query.filter || '';
    let totalItems;
    // const regex = new RegExp(filter, 'i') // i for case insensitive
    CollectedOrder.find(
        // {
        //     $or: [
        //         { name: { $regex: regex } },
        //         { type: { $regex: regex } },
        //     ]
        // }
    )
        .countDocuments()
        .then(count => {
            if (perPage == 0) {
                perPage = count;
            }
            totalItems = count;
            return CollectedOrder.find(
                // {
                //     $or: [
                //         { name: { $regex: regex } },
                //         { type: { $regex: regex } },
                //     ]
                // }
            )
                .skip((currentPage - 1) * perPage)
                .limit(perPage);
        })
        .then(collectedOrders => {
            res
                .status(200)
                .json({ message: 'Collected Orders fetched', collectedOrders: collectedOrders, totalItems: totalItems, perPage: parseInt(perPage), currentPage: parseInt(currentPage) });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })

};

exports.getCollectedOrder = (req, res, next) => {
    const collectedOrderId = req.params.collectedOrderId;
    CollectedOrder.findById(collectedOrderId)
      .then(collectedOrder => {
        if (!collectedOrder) {
          const error = new Error('Could not find an Order');
          error.statusCode = 404;
          throw error;
        }
        // console.log('mahmoud', resturant)
        res
          .status(200)
          .json(collectedOrder);
      }).catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      })
  };