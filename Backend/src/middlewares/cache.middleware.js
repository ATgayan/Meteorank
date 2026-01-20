import { weatherCache } from "../config/cache.js";

export const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;

  if (weatherCache.has(key)) {
    return res.json({
      cache: "HIT",
      data: weatherCache.get(key)
    });
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    weatherCache.set(key, body);
    res.sendResponse(body);
  };

  next();
};
