import { Badge, Text, VStack, HStack } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

const MeteorologyInfo = () => {
  const { weather } = useWeather();
  return (
    <>
      <HStack justifyContent="space-between">
        <VStack textAlign="center" alignItems="stretch">
          <Text>temperature</Text>
          <Badge backgroundColor="#ffffff6c" padding={1}>
            {weather?.temperature_2m}°C
          </Badge>
          <Text>humidity</Text>
          <Badge backgroundColor="#ffffff6c" padding={1}>
            {weather?.relative_humidity_2m}%
          </Badge>
        </VStack>
        <VStack textAlign="center" alignItems="stretch">
          <Text>wind speed</Text>
          <Badge backgroundColor="#ffffff6c" padding={1}>
            {weather?.wind_speed_10m}km/h
          </Badge>
          <Text>precipitation</Text>
          <Badge backgroundColor="#ffffff6c" padding={1}>
            {weather?.precipitation_probability}%
          </Badge>
        </VStack>
      </HStack>
    </>
  );
};

export default MeteorologyInfo;
