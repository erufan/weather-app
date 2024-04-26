import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const CloudAnim = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useContext(WeatherContext);

  useGSAP(() => {
    gsap
      .timeline({
        defaults: { duration: 6, repeat: -1, ease: "none" },
      })
      .fromTo(".cloud1", { translate: "210%" }, { translate: "-150%" })
      .fromTo(".cloud2", { translate: "210%" }, { translate: "-150%" }, 2.5)
      .fromTo(".cloud3", { translate: "210%" }, { translate: "-100%" }, 3);
  }, [loading]);

  return <>{children}</>;
};

export default CloudAnim;
