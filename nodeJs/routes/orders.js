const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const ordersController = require("../controllers/orders");

const isAuth = require('../middleware/is-auth');
// GET /orders
router.get("/orders", isAuth, ordersController.getOrders);
router.get("/orders/:orderId", isAuth, ordersController.getOrder);

// POST /order
router.post(
  "/order",
  isAuth,
  [
    body("name", "name is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
    body("content", "content is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
  ],
  ordersController.addOrder
);

router.put("/order/:orderId",
  isAuth,
  [
    body("name", "name is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
    body("content", "content is too small min length 5 char.")
      .trim()
      .isLength({ min: 5 }),
  ],
  ordersController.updateOrder
);

router.delete("/order/:orderId", isAuth, ordersController.deleteOrder);

module.exports = router;
