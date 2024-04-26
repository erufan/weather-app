import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const SunAnim = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useContext(WeatherContext);

  useGSAP(() => {
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
  }, [loading]);

  return <>{children}</>;
};

export default SunAnim;
