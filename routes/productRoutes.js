const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
} = require("../controllers/productController");

const upload = require("../config/multer");

router.post("/add", upload.single("image"), addProduct);

router.get("/", getProducts);

module.exports = router;