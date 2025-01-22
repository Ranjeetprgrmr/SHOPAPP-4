import express from "express";
import { getProductsById, getProducts } from "../controllers/productController.js";

const router = express.Router();

// router.get("/", getProducts);

// router.get("/:id", getPoductById);
router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

export default router;
