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
import cloudAnim from "../../animations/cloudAnim";
import sunAnim from "../../animations/sunAnim";
interface Props {
  weatherConditions: number | undefined;
}

const IconWeather = ({ weatherConditions }: Props) => {
  const { loading } = useContext(WeatherContext);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (!loading) {
      if (weatherConditions === 0) return sunAnim(weatherConditions);
      cloudAnim(weatherConditions);
      sunAnim(weatherConditions);
    }
  }, [loading]);

  return (
    <>
      {weatherConditions == 0 && <ClearSky />}
      {weatherConditions == 1 && <MainlyClear />}
      {weatherConditions == 2 && <PartlyCloudy />}
      {weatherConditions == 3 && <Overcast />}
      {(weatherConditions == 45 || weatherConditions == 48) && <Fog />}
      {weatherConditions == 51 && <DrizzleLight />}
      {weatherConditions == 53 && <DrizzleModerate />}
      {weatherConditions == 55 && <DrizzDense />}
      {weatherConditions == 56 && <FreezingDrizzleLight />}
      {weatherConditions == 57 && <FreezingDrizzleDense />}
      {weatherConditions == 61 && <RainSlight />}
      {weatherConditions == 63 && <RainModerate />}
      {weatherConditions == 65 && <RainHeavy />}
      {weatherConditions == 66 && <FreezingRainLight />}
      {weatherConditions == 67 && <FreezingRainHeavy />}
      {weatherConditions == 71 && <SnowFallSlight />}
      {weatherConditions == 73 && <SnowFallModerate />}
      {weatherConditions == 75 && <SnowFallHeavy />}
      {weatherConditions == 77 && <SnowGrains />}
      {weatherConditions == 80 && <RainShowersSlight />}
      {weatherConditions == 81 && <RainShowersModerate />}
      {weatherConditions == 82 && <RainShowersViolent />}
      {weatherConditions == 85 && <SnowShowersSlight />}
      {weatherConditions == 86 && <SnowShowersHeavy />}
      {(weatherConditions == 95 ||
        weatherConditions == 96 ||
        weatherConditions == 99) && <Thunderstorm />}
    </>
  );
};

export default IconWeather;
