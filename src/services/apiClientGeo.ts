import axios from "axios";

export default axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});
