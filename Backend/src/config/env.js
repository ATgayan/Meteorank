import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 8081,
  weatherKey: process.env.OPEN_WEATHER_API_KEY,
  weatherBaseUrl: process.env.OPEN_WEATHER_BASE_URL,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0Audience: process.env.AUTH0_AUDIENCE,

};
