export const calculateComfortIndex = ({ temp, humidity, wind, clouds }) => {
  // Ideal values
  const tempScore = Math.max(0, 100 - Math.abs(22 - temp) * 3);
  const humidityScore = Math.max(0, 100 - Math.abs(50 - humidity) * 2);
  const windScore = Math.max(0, 100 - wind * 10);
  const cloudScore = Math.max(0, 100 - clouds);

  const score =
    tempScore * 0.4 +
    humidityScore * 0.3 +
    windScore * 0.2 +
    cloudScore * 0.1;

  return Math.round(score);
};
