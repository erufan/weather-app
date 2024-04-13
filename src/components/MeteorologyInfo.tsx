import { Badge, Text, VStack, HStack } from "@chakra-ui/react";
import IconBox from "./icon/IconBox";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const MeteorologyInfo = () => {
  const { weather } = useContext(WeatherContext);
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
          <IconBox />
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
