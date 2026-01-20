import { weatherApi } from "../config/openWeather.js";

export const fetchWeatherByCity = async (cityId) => {
  const { data } = await weatherApi.get("", {
    params: { id: cityId }
  });
  return data;
};
