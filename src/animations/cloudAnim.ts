import gsap from "gsap";
import Current from "../interfaces/Current";

const cloudAnim = (weather: Current | undefined) => {
  const noPrecipitation = [1, 2, 3, 45, 48];

  const dublicatedCode = gsap
    .timeline({
      defaults: { duration: 6, repeat: -1, ease: "none" },
    })
    .to(".cloud1", { x: "-150%" })
    .to(".cloud2", { x: "-150%" }, 2.5)
    .to(".cloud3", { x: "-200%" }, 3);

  noPrecipitation.find((e) => {
    if (e === weather?.weather_code) return dublicatedCode;
    dublicatedCode.to(
      ".precipitation",
      { y: "150%", x: "-150%", duration: 3 },
      0
    );
  });
};

export default cloudAnim;
