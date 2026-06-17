import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// DOTENV
import dotenv from "dotenv";
dotenv.config();

// Connect DB
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

connectDB(() => {
  console.log("MongoDB Succesfully Connected!");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// ROUTES
import userRoutes from "./routes/user.routes.js";
app.use("/api/user", userRoutes);
