const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const resturantsController = require("../controllers/collectedOrders");

const isAuth = require('../middleware/is-auth');
router.get("/collected-orders", isAuth, resturantsController.getCollectedOrders);
router.get("/collected-order/:collectedOrderId", isAuth, resturantsController.getCollectedOrder);

router.post(
  "/collect-order",
  isAuth,
  resturantsController.addCollectedOrder
);

module.exports = router;
