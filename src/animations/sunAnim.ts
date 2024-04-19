import gsap from "gsap";

const sunAnim = (weatherCode: number | undefined) => {
  const sunExist = [0, 1, 2, 80, 81, 82, 85, 86];

  sunExist.find((e) => {
    if (e === weatherCode) {
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
