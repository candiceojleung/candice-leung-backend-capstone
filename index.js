import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import logRoutes from "./routes/logRoutes.js"

const app = express();

// Middleware
const { CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Basic Route
app.use("/api/user", userRoutes);
app.use("/api/log", logRoutes);

// Server Listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
