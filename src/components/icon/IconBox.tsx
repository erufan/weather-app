import { Text } from "@chakra-ui/react";
import weatherCode from "../../weatherCode";
import WeatherCode from "../../interfaces/WeatherCode";
import IconWeather from "./IconWeather";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

interface Props {
  type: "main" | "minor";
  index?: number;
}

const IconBox = ({ type, index }: Props) => {
  const { weather } = useContext(WeatherContext);
  return (
    <>
      <IconWeather type={type} index={index} />
      {Object.keys(weatherCode).map(
        (key) =>
          parseInt(key) === weather?.current.weather_code && (
            <Text key={key}>
              {weatherCode[weather?.current.weather_code as keyof WeatherCode]}
            </Text>
          )
      )}
    </>
  );
};

export default IconBox;
