import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// const getProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({});
//   if (products) {
//     res.json(products);
//   }
// });
const getProducts = asyncHandler(async (req, res) => {
  throw new Error("Failed to fetch products");
  const products = await Product.find({});
  if (!products) {
    throw new Error("Failed to fetch products");
  }
});

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductsById };
