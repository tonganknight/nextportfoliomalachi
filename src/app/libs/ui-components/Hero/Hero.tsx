"use client";
import { HeroTitle } from "./HeroTitle";
import useMobileScreen from "../../helpers/useMobileScreen";
import { BackGroundBlur } from "./BackGroundBlur";

export const Hero = () => {
  const isMobile = useMobileScreen();
  return (
    <div
      id="HOME"
      className="flex justify-center items-center h-[53vh] mt-[20rem]"
    >
      <BackGroundBlur
        singleBlob={isMobile ? true : false}
        isMobile={isMobile}
        margin={isMobile ? "mr-[110%]" : "mr-[0%]"}
      />
      <HeroTitle />
    </div>
  );
};
