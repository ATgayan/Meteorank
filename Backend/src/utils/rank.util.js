export const rankCities = (cities) =>
  cities
    .sort((a, b) => b.comfortScore - a.comfortScore)
    .map((city, index) => ({
      ...city,
      rank: index + 1
    }));
