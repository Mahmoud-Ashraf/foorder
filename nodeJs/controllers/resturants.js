const Resturant = require('../models/resturant');
const { validationResult } = require("express-validator");

exports.getResturants = (req, res, next) => {
  const currentPage = req.query.page || 1;
  let perPage = req.query.perPage || 2;
  let totalItems;
  Resturant.find().countDocuments()
    .then(count => {
      if (perPage == 0) {
        // console.log('not per page');
        perPage = count;
      }
      // console.log('perPage =', perPage);
      totalItems = count;
      return Resturant.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(resturants => {
      res
        .status(200)
        .json({ message: 'resturant fetched', resturants: resturants, totalItems: totalItems, perPage: perPage, currentPage: currentPage });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })

};

exports.getToDayResturant = (req, res, next) => {
  // console.log(req.params.resturantId);
  // const resturantId = req.params.resturantId;
  Resturant.findOne()
    .sort('-vote')
    .exec((err, doc) => {
      // let max = doc.vote;
      // console.log('max', doc);
      // if (!doc) {
      //   const error = new Error('Could not find a resturant');
      //   error.statusCode = 404;
      //   throw error;
      // }
      res
        .status(200)
        .json(doc);
    })
  // Resturant.findById(resturantId)
  //   .then(resturant => {
  //     if (!resturant) {
  //       const error = new Error('Could not find a resturant');
  //       error.statusCode = 404;
  //       throw error;
  //     }
  //     console.log('mahmoud', resturant)
  //     res
  //       .status(200)
  //       .json(resturant);
  //   })
};
exports.getResturant = (req, res, next) => {
  // console.log(req.params.resturantId);
  const resturantId = req.params.resturantId;
  Resturant.findById(resturantId)
    .then(resturant => {
      if (!resturant) {
        const error = new Error('Could not find a resturant');
        error.statusCode = 404;
        throw error;
      }
      // console.log('mahmoud', resturant)
      res
        .status(200)
        .json(resturant);
    }).catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
};

exports.addResturant = (req, res, next) => {
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
  const resturant = new Resturant({
    name: name,
    content: content,
    vote: 0
  });
  resturant.save()
    .then(resturant => {
      // let resturant = req.body;
      // resturant.id = new Date().toISOString();
      // Create Resturant in db
      // 201 status code means created in db
      // 200 status code means just success
      res.status(201).json({
        message: "Resturant added successfully",
        resturant: resturant,
      });
    }).catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
};

exports.updateResturant = (req, res, next) => {
  const resturantId = req.params.resturantId;
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
  const vote = req.body.vote;
  Resturant.findById(resturantId)
    .then(resturant => {
      if (!resturant) {
        const error = new Error('Could not find a resturant');
        error.statusCode = 404;
        throw error;
      }
      resturant.name = name;
      resturant.content = content;
      resturant.vote = vote;
      return resturant.save();
    })
    .then(result => {
      return res.status(200).json({ message: 'resturant updat success', resturant: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}

exports.deleteResturant = (req, res, next) => {
  const resturantId = req.params.resturantId;
  Resturant.findById(resturantId)
    .then(resturant => {
      if (!resturant) {
        const error = new Error('Could not find a resturant');
        error.statusCode = 404;
        throw error;
      }
      return Resturant.findByIdAndRemove(resturantId);
    })
    .then(result => {
      return res.status(200).json({ message: 'resturant deleted', resturant: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}
