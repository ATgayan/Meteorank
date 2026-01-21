import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather.routes.js";
import cacheRoutes from "./routes/cache.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// Protect routes explicitly
app.use("/api/weather", weatherRoutes);
app.use("/api/cache", cacheRoutes);

export default app;
