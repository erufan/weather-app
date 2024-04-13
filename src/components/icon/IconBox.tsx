import { Text } from "@chakra-ui/react";
import weatherCode from "../../weatherCode";
import WeatherCode from "../../interfaces/WeatherCode";
import IconWeather from "./IconWeather";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

const IconBox = () => {
  const { weather } = useContext(WeatherContext);
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
