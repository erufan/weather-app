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
import CloudAnim from "../../animations/CloudAnim";
import SunAnim from "../../animations/SunAnim";
import Precipitation from "../../animations/Precipitation";
interface Props {
  weatherConditions: number | undefined;
}

const IconWeather = ({ weatherConditions }: Props) => {
  return (
    <>
      {weatherConditions == 0 && (
        <SunAnim>
          <ClearSky />
        </SunAnim>
      )}
      {weatherConditions == 1 && (
        <CloudAnim>
          <SunAnim>
            <MainlyClear />
          </SunAnim>
        </CloudAnim>
      )}
      {weatherConditions == 2 && (
        <CloudAnim>
          <SunAnim>
            <PartlyCloudy />
          </SunAnim>
        </CloudAnim>
      )}
      {weatherConditions == 3 && (
        <CloudAnim>
          <Overcast />
        </CloudAnim>
      )}
      {weatherConditions == 80 && (
        <CloudAnim>
          <SunAnim>
            <Precipitation>
              <RainShowersSlight />
            </Precipitation>
          </SunAnim>
        </CloudAnim>
      )}
      {weatherConditions == 81 && (
        <CloudAnim>
          <SunAnim>
            <Precipitation>
              <RainShowersModerate />
            </Precipitation>
          </SunAnim>
        </CloudAnim>
      )}
      {weatherConditions == 82 && (
        <CloudAnim>
          <SunAnim>
            <Precipitation>
              <RainShowersViolent />
            </Precipitation>
          </SunAnim>
        </CloudAnim>
      )}
      {weatherConditions == 85 && (
        <CloudAnim>
          <SunAnim>
            <Precipitation>
              <SnowShowersSlight />
            </Precipitation>
          </SunAnim>
        </CloudAnim>
      )}
      {weatherConditions == 86 && (
        <CloudAnim>
          <SunAnim>
            <Precipitation>
              <SnowShowersHeavy />
            </Precipitation>
          </SunAnim>
        </CloudAnim>
      )}
      {(weatherConditions == 45 || weatherConditions == 48) && (
        <CloudAnim>
          <Fog />
        </CloudAnim>
      )}
      {weatherConditions == 51 && (
        <CloudAnim>
          <Precipitation>
            <DrizzleLight />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 53 && (
        <CloudAnim>
          <Precipitation>
            <DrizzleModerate />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 55 && (
        <CloudAnim>
          <Precipitation>
            <DrizzDense />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 56 && (
        <CloudAnim>
          <Precipitation>
            <FreezingDrizzleLight />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 57 && (
        <CloudAnim>
          <Precipitation>
            <FreezingDrizzleDense />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 61 && (
        <CloudAnim>
          <Precipitation>
            <RainSlight />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 63 && (
        <CloudAnim>
          <Precipitation>
            <RainModerate />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 65 && (
        <CloudAnim>
          <Precipitation>
            <RainHeavy />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 66 && (
        <CloudAnim>
          <Precipitation>
            <FreezingRainLight />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 67 && (
        <CloudAnim>
          <Precipitation>
            <FreezingRainHeavy />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 71 && (
        <CloudAnim>
          <Precipitation>
            <SnowFallSlight />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 73 && (
        <CloudAnim>
          <Precipitation>
            <SnowFallModerate />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 75 && (
        <CloudAnim>
          <Precipitation>
            <SnowFallHeavy />
          </Precipitation>
        </CloudAnim>
      )}
      {weatherConditions == 77 && (
        <CloudAnim>
          <Precipitation>
            <SnowGrains />
          </Precipitation>
        </CloudAnim>
      )}
      {(weatherConditions == 95 ||
        weatherConditions == 96 ||
        weatherConditions == 99) && <Thunderstorm />}
    </>
  );
};

export default IconWeather;
