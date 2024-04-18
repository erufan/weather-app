import { Badge, Text, VStack, HStack } from "@chakra-ui/react";
import IconBox from "./icon/IconBox";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

interface Props {
  type: "main" | "minor";
  index?: number;
}

const MeteorologyInfo = ({ type, index }: Props) => {
  const { weather } = useContext(WeatherContext);
  if (weather) {
    const { current, daily } = weather;
    return (
      <>
        <HStack justifyContent="space-between">
          <VStack textAlign="center" alignItems="stretch">
            <Text>{type === "main" ? "humidity" : "Date"}</Text>
            <Badge backgroundColor="#ffffff6c" padding={1}>
              {type === "main"
                ? current.relative_humidity_2m + "%"
                : daily.time[index!]}
            </Badge>
            <Text>temperature</Text>
            <Badge backgroundColor="#ffffff6c" padding={1}>
              {type === "main"
                ? current.temperature_2m
                : daily.temperature_2m_max[index!] +
                  "~" +
                  daily.temperature_2m_min[index!]}
              °C
            </Badge>
          </VStack>
          <VStack textAlign="center" alignItems="stretch">
            <IconBox />
          </VStack>
          <VStack textAlign="center" alignItems="stretch">
            <Text>wind speed</Text>
            <Badge backgroundColor="#ffffff6c" padding={1}>
              {type === "main"
                ? current.wind_speed_10m
                : daily.wind_speed_10m_max[index!]}
              km/h
            </Badge>
            <Text>precipitation</Text>
            <Badge backgroundColor="#ffffff6c" padding={1}>
              {type === "main"
                ? current.precipitation_probability
                : daily.precipitation_probability_max[index!]}
              %
            </Badge>
          </VStack>
        </HStack>
      </>
    );
  }
};

export default MeteorologyInfo;
