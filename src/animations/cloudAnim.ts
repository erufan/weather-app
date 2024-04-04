import { useGSAP } from "@gsap/react";
import useWeather from "../hooks/useWeather";
import gsap from "gsap";

const cloudAnim = () => {
  gsap.registerPlugin(useGSAP);
  const { isLoading } = useWeather();

  useGSAP(() => {
    if (!isLoading) {
      gsap
        .timeline({
          defaults: { duration: 6, repeat: -1, ease: "none" },
        })
        .to(".cloud1", { x: "-150%" })
        .to(".precipitation", { y: "150%", x: "-150%", duration: 3 }, 0)
        .to(".cloud2", { x: "-150%" }, 2.5)
        .to(".cloud3", { x: "-200%" }, 3);
    }
  }, [isLoading]);
};

export default cloudAnim;
