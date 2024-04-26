import { Text } from "@chakra-ui/react";
import weatherCode from "../../weatherCode";
import WeatherCode from "../../interfaces/WeatherCode";
import IconWeather from "./IconWeather";

interface Props {
  weatherConditions: number | undefined;
}

const IconBox = ({ weatherConditions }: Props) => {
  return (
    <>
      <IconWeather weatherConditions={weatherConditions} />
      {Object.keys(weatherCode).map(
        (key) =>
          parseInt(key) === weatherConditions && (
            <Text key={key} whiteSpace={{ base: "wrap", md: "nowrap" }}>
              {weatherCode[weatherConditions as keyof WeatherCode]}
            </Text>
          )
      )}
    </>
  );
};

export default IconBox;
