import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();

app.use(helmet()); // Secure headers
app.use(compression()); // GZIP compression
app.use(morgan("dev")); // Logs requests
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Portfolio API is running with TypeScript!");
});
app.use("/api/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
