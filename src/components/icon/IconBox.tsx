import { Text } from "@chakra-ui/react";
import useWeather from "../../hooks/useWeather";
import weatherCode from "../../weatherCode";
import WeatherCode from "../../interfaces/WeatherCode";
import IconWeather from "./IconWeather";

const IconBox = () => {
  const { weather } = useWeather();
  return (
    <>
      <IconWeather />
      {Object.keys(weatherCode).map(
        (key) =>
          parseInt(key) === weather?.weather_code && (
            <Text key={key}>
              {weatherCode[weather?.weather_code as keyof WeatherCode]}
            </Text>
          )
      )}
    </>
  );
};

export default IconBox;
