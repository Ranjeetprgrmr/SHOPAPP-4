import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use('/api/products', ProductRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
