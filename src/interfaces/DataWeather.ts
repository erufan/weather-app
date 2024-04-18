import Current from "./Current";
import Daily from "./Daily";

export default interface DataWeather {
  current: Current;
  daily: Daily;
}
