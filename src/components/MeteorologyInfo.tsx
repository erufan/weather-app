import { HStack, Badge, Text } from "@chakra-ui/react";
import useWeather from "../hooks/useWeather";

const MeteorologyInfo = () => {
  const { weather } = useWeather();

  return (
    <>
      <HStack justifyContent="space-between">
        <Text>temperature</Text>
        <Badge>{weather?.temperature_2m}</Badge>
      </HStack>
      <HStack justifyContent="space-between">
        <Text>wind speed</Text>
        <Badge>{weather?.wind_speed_10m}</Badge>
      </HStack>
    </>
  );
};

export default MeteorologyInfo;
