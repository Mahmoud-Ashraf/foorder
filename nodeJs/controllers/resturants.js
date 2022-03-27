const Resturant = require('../models/resturant');
const { validationResult } = require("express-validator");
exports.getResturants = (req, res, next) => {
  Resturant.find()
    .then(resturants => {
      // console.log('mahmoud', resturants)
      res
        .status(200)
        .json(resturants);
    })
};

exports.getResturant = (req, res, next) => {
  console.log(req.params.resturantId);
  const resturantId = req.params.resturantId;
  Resturant.findById(resturantId)
    .then(resturant => {
      console.log('mahmoud', resturant)
      res
        .status(200)
        .json(resturant);
    })
};

exports.addResturant = (req, res, next) => {

  // const errors = validationResult(req);
  // // console.log(validationResult(req));
  // if (!errors.isEmpty()) {
  //   res.status(422).json({
  //     message: "Validation Faild, Enter data in correct format",
  //     errors: errors.array(),
  //   });
  //   console.log('hello', res);
  // }

  const name = req.body.name;
  const content = req.body.content;
  const resturant = new Resturant({
    name: name,
    content: content
  });
  resturant.save()
    .then(result => {
      // console.log('resturant added')
    }).catch(err => {
      console.log(err);
    })
  // let resturant = req.body;
  // resturant.id = new Date().toISOString();
  // console.log(req.body);
  // console.log(res);
  // Create Resturant in db
  // 201 status code means created in db
  // 200 status code means just success
  res.status(201).json({
    message: "Resturant added successfully",
    resturant: { name: name, content: content },
  });
};

exports.getEditResturant = (req, res, next) => {
  const resturantId = req.params.resturantId;
  Resturant.findById(resturantId)
    .then(resturant => {
      console.log('mahmoud', resturant)
      res
        .status(200)
        .json(resturant);
    })
}

exports.postEditResturant = (req, res, next) => {
  console.log('hokaaaa', req.body);
  const resturantId = req.body._id;
  const updatedName = req.body.name;
  const updatedContent = req.body.content;
  Resturant.findById(resturantId).then(resturant => {
    resturant.name = updatedName;
    resturant.content = updatedContent;
    return resturant.save()
  }).then(result => {
    console.log('updated successfully');
    // res.redirect('/resturants');
  }).catch(err => {
    console.log(err);
  })
  res.status(201).json({
    message: "Resturant updated successfully",
    resturant: { name: updatedName, content: updatedContent },
  });
}

exports.postDeleteResturant = (req, res, next) => {
  console.log('zombieeeee', req.body);
  const resturantId = req.body._id;
  Resturant.findByIdAndRemove(resturantId)
  .then(() => {
    console.log('Resturant Deleted!');
    res.redirect('/resturants')
  }).catch( err => {
    console.log(err);
  })
}
