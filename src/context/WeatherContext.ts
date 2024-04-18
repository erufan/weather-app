import { createContext } from "react";
import DataWeather from "../interfaces/DataWeather";

interface WeatherContexts {
  weather: DataWeather | undefined;
  loading: boolean;
}

const WeatherContext = createContext<WeatherContexts>({} as WeatherContexts);

export default WeatherContext;
