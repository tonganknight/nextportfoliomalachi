"use client";
import { HeroTitle } from "./HeroTitle";
import useMobileScreen from "../../helpers/useMobileScreen";
import { BackGroundBlur } from "./BackGroundBlur";

export const Hero = () => {
  const isMobile = useMobileScreen();

  return (
    <div
      id="Home"
      className="flex justify-center items-center h-screen mt-[14rem]"
    >
      <BackGroundBlur isMobile={isMobile} />
      <HeroTitle />
    </div>
  );
};
