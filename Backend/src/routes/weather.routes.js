import express from "express";
import { getWeatherDashboard } from "../controllers/weather.controller.js";
import { cacheMiddleware } from "../middlewares/cache.middleware.js";
import { authMiddleware } from "../config/Auth.js";

const router = express.Router();

router.get(
  "/dashboard",

  cacheMiddleware,
  getWeatherDashboard
);

export default router;
