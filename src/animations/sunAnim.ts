import { useGSAP } from "@gsap/react";
import useWeather from "../hooks/useWeather";
import gsap from "gsap";

const sunAnim = () => {
  gsap.registerPlugin(useGSAP);
  const { isLoading } = useWeather();

  useGSAP(() => {
    !isLoading &&
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
  }, [isLoading]);
};

export default sunAnim;
