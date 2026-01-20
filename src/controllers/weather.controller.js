import { cityCodes } from "../data/cities.js";
import { fetchWeatherByCity } from "../services/weather.service.js";
import { calculateComfortIndex } from "../services/comfort.service.js";
import { rankCities } from "../utils/rank.util.js";

export const getWeatherDashboard = async (req, res) => {
  const results = [];

  for (const cityId of cityCodes) {
    const data = await fetchWeatherByCity(cityId);
    const comfortScore = calculateComfortIndex({
      temp: data.main.temp,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      clouds: data.clouds.all
    });

    results.push({
      city: data.name,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      cloudCoverage: data.clouds.all,
      description: data.weather[0].description,
      temperature: data.main.temp,
      weather: data.weather[0].description,
      comfortScore
    });
  }

  res.json(rankCities(results));
};
