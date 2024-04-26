import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Precipitation = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useContext(WeatherContext);

  useGSAP(() => {
    gsap.fromTo(
      ".precipitation",
      { translate: "0 0", duration: 3 },
      { translate: "-150% 150%", duration: 3, repeat: -1 }
    );
  }, [loading]);

  return <>{children}</>;
};

export default Precipitation;
