import gsap from "gsap";

const cloudAnim = (weatherCode: number | undefined) => {
  const precipitationExist = [
    51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86,
  ];

  const dublicatedCode = gsap
    .timeline({
      defaults: { duration: 6, repeat: -1, ease: "none" },
    })
    .fromTo(".cloud1", { x: "210%" }, { x: "-150%" })
    .fromTo(".cloud2", { x: "210%" }, { x: "-150%" }, 2.5)
    .fromTo(".cloud3", { x: "210%" }, { x: "-200%" }, 3);

  precipitationExist.find((e) => {
    e === weatherCode &&
      dublicatedCode.fromTo(
        ".precipitation",
        { y: "0", x: "0", duration: 3 },
        { y: "150%", x: "-150%", duration: 3 },
        0
      );
    dublicatedCode;
  });
};

export default cloudAnim;
