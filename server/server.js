import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { products } from "./data/products.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.get("/api/products", (req, res) => {
  res.json(products );
});
app.get("/api/products/:id", (req, res) => {
  console.log('this is req', req);
  console.log("this is id", req.params);
  const product = products.find(p=> p.id == req.params.id);
  console.log("this is product", product);
  res.json({ message: "success", product });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
