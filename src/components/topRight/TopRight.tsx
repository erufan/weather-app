import { VStack, Text } from "@chakra-ui/react";
import useWeather from "../../hooks/useWeather";
import weatherCode from "../../weatherCode";
import WeatherCode from "../../interfaces/WeatherCode";
import IconWeather from "./IconWeather";

const TopRight = () => {
  const { weather } = useWeather();
  return (
    <VStack gap="16px">
      <IconWeather />
      {Object.keys(weatherCode).map(
        (key) =>
          parseInt(key) === weather?.weather_code && (
            <Text key={key}>
              {weatherCode[weather?.weather_code as keyof WeatherCode]}
            </Text>
          )
      )}
    </VStack>
  );
};

export default TopRight;
