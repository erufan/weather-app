import City from "../interfaces/City";
import httpService from "./httpService";

export interface Data {
  results: City[] | undefined;
}

const cityService = (input: string | undefined) => {
  return httpService(
    "https://geocoding-api.open-meteo.com/v1",
    `/search?name=${input}`
  );
};

export default cityService;
