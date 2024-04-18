import httpService from "./httpService";

const weatherService = (latitude: number, longitude: number) =>
  httpService(
    "https://api.open-meteo.com/v1",
    `/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code,precipitation_probability,relative_humidity_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&forecast_days=3`
  );

export default weatherService;
