import express from "express";
import { getWeatherDashboard } from "../controllers/weather.controller.js";
import { cacheMiddleware } from "../middlewares/cache.middleware.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { whitelistMiddleware } from "../middlewares/whitelist.Middleware.js";


const router = express.Router();

router.get(
  "/dashboard",
  cacheMiddleware,
  getWeatherDashboard
);

export default router;
