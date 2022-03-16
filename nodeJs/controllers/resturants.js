const { validationResult } = require("express-validator");
exports.getResturants = (req, res, next) => {
  res
    .status(200)
    .json([{ _id: "1", name: "Anas Al Demashky", content: "Some Dummy Data" }]);
};

exports.addResturant = (req, res, next) => {
  const errors = validationResult(req);
  // console.log(validationResult(req));
  if (!errors.isEmpty()) {
    res.status(422).json({
      message: "Validation Faild, Enter data in correct format",
      errors: errors.array(),
    });
    console.log('hello', res);
  }
  // const title = req.body.name;
  // const content = req.body.content;
  const resturant = req.body;
  // console.log(req.body);
  // console.log(res);
  // Create Resturant in db
  // 201 status code means created in db
  // 200 status code means just success
  res.status(201).json({
    message: "Resturant added successfully",
    resturant: resturant,
  });
};
