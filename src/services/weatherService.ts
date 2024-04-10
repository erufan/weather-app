import httpService from "./httpService";

const weatherService = (latitude: number, longitude: number) =>
  httpService(
    "https://api.open-meteo.com/v1",
    `/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code,precipitation_probability,relative_humidity_2m`
  );

export default weatherService;
