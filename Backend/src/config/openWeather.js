import axios from "axios";
import { env } from "./env.js";

export const weatherApi = axios.create({
  baseURL: env.weatherBaseUrl,
  params: {
    appid: env.weatherKey,
    units: "metric"
  }
});
