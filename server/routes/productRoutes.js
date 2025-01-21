import express from "express";
import Product from "../models/productModel.js";

const router = express.Router()

router.get("/", async (req, res) => {
    try {
      const products = await Product.find({});
      // console.log('this is products',products)
      res.json(products);
    } catch (error) {
      res.json({
        message: 'Something went wrong'
      })
    }
  });
  router.get("/:id", async (req, res) => {
    // console.log('this is req', req);
    // console.log("this is id", req.params);
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.json({
        message: 'product not found'
      })
    }
  });

  export default router;