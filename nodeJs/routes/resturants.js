const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const resturantsController = require("../controllers/resturants");
// GET /resturants
router.get("/resturants", resturantsController.getResturants);
router.get("/resturant/:resturantId", resturantsController.getResturant);
router.post("/delete-resturant", resturantsController.postDeleteResturant);

// POST /resturant
router.post(
  "/resturant",
  [
    body("name", "name is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
    body("content", "content is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
  ],
  resturantsController.addResturant
);
// // router.post(
// //   "/resturants/:resturantId",
// //   [
// //     body("name", "name is too small min length 5 char.")
// //       .trim()
// //       .isLength({ min: 5 }),
// //     body("content", "content is too small min length 5 char.")
// //       .trim()
// //       .isLength({ min: 5 }),
// //   ],
// //   resturantsController.getEditResturant
// // );
router.post(
  "/edit-resturant",
  [
    body("name", "name is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
    body("content", "content is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
  ],
  resturantsController.postEditResturant
);
router.get("/edit-resturant/:resturantId", resturantsController.getEditResturant);

module.exports = router;
