const express = require("express");
const router = express.Router();
const products = require("../models/products.js");
router
  .route("/")
  .get(async (req, res) => {
    let documents = [];
    try {
      const { active } = req.query;
      if (active) {
        documents = await products.find({ active: active });
      } else {
        documents = await products.find({});
      }
      res.send(documents);
    } catch (err) {
      //Lỗi 500 do CSDL có vấn đề
      res.status(500).json({ message: err.message });
    }
  })
  .post(async (req, res) => {
    const product = new products({
      name: req.body.name,
      price: req.body.price,
      desc: req.body.desc,
      img: req.body.img,
      active: req.body.active,
      id_category: req.body.id_category,
    });
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      //Lỗi do người dùng nhập vào
      res.status(400).json({ message: err.message });
    }
  });
router.route("/:id").get(getProductById, async (req, res) => {
  res.send(res.product);
});
async function getProductById(req, res, next) {
  let product;
  try {
    product = await products.findById(req.params.id);
    if (product == null) {
      //404 ko tìm thấy
      res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.product = product;
  next();
}
module.exports = router;
