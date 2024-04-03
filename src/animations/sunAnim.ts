import { useGSAP } from "@gsap/react";
import useWeather from "../hooks/useWeather";
import gsap from "gsap";

const sunAnim = () => {
  gsap.registerPlugin(useGSAP);
  const { weather, isLoading } = useWeather();
  const sunExistIcon = [0, 1, 2, 80, 81, 82, 85, 86];

  useGSAP(() => {
    !isLoading &&
      sunExistIcon.map((e) => {
        if (e == weather?.weather_code) {
          gsap.fromTo(
            ".sun",
            { rotation: "0" },
            {
              rotation: "+=360",
              duration: 15,
              repeat: -1,
              transformOrigin: "center",
              ease: "none",
            }
          );
        }
      });
  }, [isLoading]);
};

export default sunAnim;
