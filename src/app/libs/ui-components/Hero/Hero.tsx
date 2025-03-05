"use client";
import { HeroTitle } from "./HeroTitle";
import useMobileScreen from "../../helpers/useMobileScreen";
import { BackGroundBlur } from "./BackGroundBlur";
import { cn } from "../../utils";

export const Hero = () => {
  const isMobile = useMobileScreen();
  return (
    <div
      id="HOME"
      className={cn(
        "flex justify-center items-center h-[53vh]",
        isMobile ? "mt-[25%]" : "mt-[20rem]"
      )}
    >
      <div className="absolute  mt-[14rem]">
        <BackGroundBlur
          singleBlob={isMobile ? true : false}
          isMobile={isMobile}
          margin={isMobile ? "mr-[110%]" : "mr-[0%]"}
        />
      </div>
      <HeroTitle />
    </div>
  );
};
