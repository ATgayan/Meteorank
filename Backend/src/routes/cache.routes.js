import express from "express";
import { weatherCache } from "../config/cache.js";

const router = express.Router();

router.get("/status", (req, res) => {
  res.json({
    keys: weatherCache.keys(),
    stats: weatherCache.getStats()
  });
});

export default router;
