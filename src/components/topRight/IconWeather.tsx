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

import useWeather from "../../hooks/useWeather";

const IconWeather = () => {
  const { weather } = useWeather();
  return (
    <>
      {weather?.weather_code == 0 && <ClearSky />}
      {weather?.weather_code == 1 && <MainlyClear />}
      {weather?.weather_code == 2 && <PartlyCloudy />}
      {weather?.weather_code == 3 && <Overcast />}
      {(weather?.weather_code == 45 || weather?.weather_code == 48) && <Fog />}
      {weather?.weather_code == 51 && <DrizzleLight />}
      {weather?.weather_code == 53 && <DrizzleModerate />}
      {weather?.weather_code == 55 && <DrizzDense />}
      {weather?.weather_code == 56 && <FreezingDrizzleLight />}
      {weather?.weather_code == 57 && <FreezingDrizzleDense />}
      {weather?.weather_code == 61 && <RainSlight />}
      {weather?.weather_code == 63 && <RainModerate />}
      {weather?.weather_code == 65 && <RainHeavy />}
      {weather?.weather_code == 66 && <FreezingRainLight />}
      {weather?.weather_code == 67 && <FreezingRainHeavy />}
      {weather?.weather_code == 71 && <SnowFallSlight />}
      {weather?.weather_code == 73 && <SnowFallModerate />}
      {weather?.weather_code == 75 && <SnowFallHeavy />}
      {weather?.weather_code == 77 && <SnowGrains />}
      {weather?.weather_code == 80 && <RainShowersSlight />}
      {weather?.weather_code == 81 && <RainShowersModerate />}
      {weather?.weather_code == 82 && <RainShowersViolent />}
      {weather?.weather_code == 85 && <SnowShowersSlight />}
      {weather?.weather_code == 86 && <SnowShowersHeavy />}
      {(weather?.weather_code == 95 ||
        weather?.weather_code == 96 ||
        weather?.weather_code == 99) && <Thunderstorm />}
    </>
  );
};

export default IconWeather;
