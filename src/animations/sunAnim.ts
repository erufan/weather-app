import gsap from "gsap";
import Current from "../interfaces/Current";

const sunAnim = (weather: Current | undefined) => {
  const sunExist = [0, 1, 2, 80, 81, 82, 85, 86];

  sunExist.find((e) => {
    if (e === weather?.weather_code) {
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
};

export default sunAnim;
