const Order = require('../models/order');
const User = require('../models/user');
const { validationResult } = require("express-validator");

exports.getOrders = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 2;
  let totalItems;
  Order.find().countDocuments()
    .then(count => {
      totalItems = count;
      return Order.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(orders => {
      res
        .status(200)
        .json({ message: 'orders fetched', orders: orders, totalItems: totalItems, perPage: perPage, currentPage: currentPage });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })

};

exports.getOrder = (req, res, next) => {
  console.log(req.params.orderId);
  const orderId = req.params.orderId;
  Order.findById(orderId)
    .then(order => {
      if (!order) {
        const error = new Error('Could not find a order');
        error.statusCode = 404;
        throw error;
      }
      console.log('mahmoud', order)
      res
        .status(200)
        .json(order);
    }).catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
};

exports.addOrder = (req, res, next) => {
  console.log('order req', req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation Faild, Enter data in correct format');
    error.statusCode = 422;
    throw error;
  }
  const order = new Order({
    userId: req.body.userId,
    resturantId: req.body.resturantId,
    items: req.body.items,
    totalOrderPrice: req.body.totalOrderPrice
  });
  order.save()
    .then(order => {
      // let order = req.body;
      // order.id = new Date().toISOString();
      // Create order in db
      // 201 status code means created in db
      // 200 status code means just success
      return User.findById(req.body.userId);
    })
    .then(user => {
      user.orders.push(order);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: "order added successfully",
        order: order,
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
};

exports.updateOrder = (req, res, next) => {
  const orderId = req.params.orderId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation Faild, Enter data in correct format');
    error.statusCode = 422;
    throw error;
    // res.status(422).json({
    //   message: "Validation Faild, Enter data in correct format",
    //   errors: errors.array(),
    // });
    // console.log('hello', res);
  }
  const name = req.body.name;
  const content = req.body.content;
  Order.findById(orderId)
    .then(order => {
      if (!order) {
        const error = new Error('Could not find a order');
        error.statusCode = 404;
        throw error;
      }
      order.name = name;
      order.content = content;
      return order.save();
    })
    .then(result => {
      return res.status(200).json({ message: 'order updat success', order: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}

exports.deleteOrder = (req, res, next) => {
  const orderId = req.params.orderId;
  Order.findById(orderId)
    .then(order => {
      if (!order) {
        const error = new Error('Could not find a order');
        error.statusCode = 404;
        throw error;
      }
      return Order.findByIdAndRemove(orderId);
    })
    .then(result => {
      return res.status(200).json({ message: 'order deleted', order: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}

exports.getAllOrder = (req, res, next) => {
  const orderId = req.params.orderId;
  Order
    .findById(orderId)
    .populate('items')
    .exec(function (err, order) {
      if (err) return handleError(err);
      console.log('The order is', order);
    });
}

exports.getUserOrders = (req, res, next) => {
  const userId = req.params.userId;
  Order.find({ userId: userId })
    .populate('resturantId', 'name')
    // .populate(['resturantId', 'items'])
    // .populate('orders')
    // // .exec(function (err, user) {
    // //     if (err) return handleError(err);
    // //     console.log('The user orders is', user.orders);
    // //     res.status(200).json(user.orders)
    // // })
    .populate('items', 'name')
    .then(orders => {
      // if (!user) {
      //     const error = new Error('Could not find a user');
      //     error.statusCode = 404;
      //     throw error;
      // }
      res
        .status(200)
        .json(orders);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}
