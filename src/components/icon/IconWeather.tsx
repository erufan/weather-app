/// <reference types="vite-plugin-svgr/client" />

import ClearSky from "../../assets/weatherIcons/0.svg?react";
import MainlyClear from "../../assets/weatherIcons/1.svg?react";
import PartlyCloudy from "../../assets/weatherIcons/2.svg?react";
import Overcast from "../../assets/weatherIcons/3.svg?react";
import Fog from "../../assets/weatherIcons/45.svg?react";
import DrizzleLight from "../../assets/weatherIcons/51.svg?react";
import DrizzleModerate from "../../assets/weatherIcons/53.svg?react";
import DrizzDense from "../../assets/weatherIcons/55.svg?react";
import FreezingDrizzleLight from "../../assets/weatherIcons/56.svg?react";
import FreezingDrizzleDense from "../../assets/weatherIcons/57.svg?react";
import RainSlight from "../../assets/weatherIcons/61.svg?react";
import RainModerate from "../../assets/weatherIcons/63.svg?react";
import RainHeavy from "../../assets/weatherIcons/65.svg?react";
import FreezingRainLight from "../../assets/weatherIcons/66.svg?react";
import FreezingRainHeavy from "../../assets/weatherIcons/67.svg?react";
import SnowFallSlight from "../../assets/weatherIcons/71.svg?react";
import SnowFallModerate from "../../assets/weatherIcons/73.svg?react";
import SnowFallHeavy from "../../assets/weatherIcons/75.svg?react";
import SnowGrains from "../../assets/weatherIcons/77.svg?react";
import RainShowersSlight from "../../assets/weatherIcons/80.svg?react";
import RainShowersModerate from "../../assets/weatherIcons/81.svg?react";
import RainShowersViolent from "../../assets/weatherIcons/82.svg?react";
import SnowShowersSlight from "../../assets/weatherIcons/85.svg?react";
import SnowShowersHeavy from "../../assets/weatherIcons/86.svg?react";
import Thunderstorm from "../../assets/weatherIcons/95.svg?react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
interface Props {
  type: "main" | "minor";
  index?: number;
}

const IconWeather = ({ type, index }: Props) => {
  const { weather } = useContext(WeatherContext);
  gsap.registerPlugin(useGSAP);
  let weatherCode: number | undefined;

  if (type === "main") weatherCode = weather?.current?.weather_code;
  if (type === "minor") weatherCode = weather?.daily.weather_code[index!];

  return (
    <>
      {weatherCode == 0 && <ClearSky />}
      {weatherCode == 1 && <MainlyClear />}
      {weatherCode == 2 && <PartlyCloudy />}
      {weatherCode == 3 && <Overcast />}
      {(weatherCode == 45 || weatherCode == 48) && <Fog />}
      {weatherCode == 51 && <DrizzleLight />}
      {weatherCode == 53 && <DrizzleModerate />}
      {weatherCode == 55 && <DrizzDense />}
      {weatherCode == 56 && <FreezingDrizzleLight />}
      {weatherCode == 57 && <FreezingDrizzleDense />}
      {weatherCode == 61 && <RainSlight />}
      {weatherCode == 63 && <RainModerate />}
      {weatherCode == 65 && <RainHeavy />}
      {weatherCode == 66 && <FreezingRainLight />}
      {weatherCode == 67 && <FreezingRainHeavy />}
      {weatherCode == 71 && <SnowFallSlight />}
      {weatherCode == 73 && <SnowFallModerate />}
      {weatherCode == 75 && <SnowFallHeavy />}
      {weatherCode == 77 && <SnowGrains />}
      {weatherCode == 80 && <RainShowersSlight />}
      {weatherCode == 81 && <RainShowersModerate />}
      {weatherCode == 82 && <RainShowersViolent />}
      {weatherCode == 85 && <SnowShowersSlight />}
      {weatherCode == 86 && <SnowShowersHeavy />}
      {(weatherCode == 95 || weatherCode == 96 || weatherCode == 99) && (
        <Thunderstorm />
      )}
    </>
  );
};

export default IconWeather;
