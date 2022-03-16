const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const resturantsController = require("../controllers/resturants");

router.get("/resturants", resturantsController.getResturants);

router.post(
  "/resturant",
  [
    body("name", "title is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
    body("content", "content is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
  ],
  resturantsController.addResturant
);

module.exports = router;
