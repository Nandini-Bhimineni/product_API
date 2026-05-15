const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Make uploads folder publicly accessible (for images)
app.use("/uploads", express.static("uploads"));


// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});