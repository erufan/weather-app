import { createContext } from "react";
import Current from "../interfaces/Current";

interface WeatherContexts {
  weather: Current | undefined;
  loading: boolean;
}

const WeatherContext = createContext<WeatherContexts>({} as WeatherContexts);

export default WeatherContext;
