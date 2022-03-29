const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const resturantsController = require("../controllers/resturants");

const isAuth = require('../middleware/is-auth');
// GET /resturants
router.get("/resturants", isAuth, resturantsController.getResturants);
router.get("/resturant/:resturantId", isAuth, resturantsController.getResturant);

// POST /resturant
router.post(
  "/resturant",
  isAuth,
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

router.put("/resturant/:resturantId",
  isAuth,
  [
    body("name", "name is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
    body("content", "content is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
  ],
  resturantsController.updateResturant
);

router.delete("/resturant/:resturantId", isAuth, resturantsController.deleteResturant);

module.exports = router;
