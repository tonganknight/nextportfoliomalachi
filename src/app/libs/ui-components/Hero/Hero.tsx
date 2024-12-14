"use client";
import BlurryBlob from "@/app/components/animate/background/blurry-blob";
import { HeroTitle } from "./HeroTitle";
import { cn } from "../../utils";
import useMobileScreen from "../../helpers/useMobileScreen";

export const Hero = () => {
  const isMobile = useMobileScreen();

  return (
    <div className="flex justify-center items-center h-screen w-screen mt-[14rem]">
      <div className={cn("static", isMobile && "pt-[189px]")}>
        <BlurryBlob
          className="rounded-xl opacity-45"
          firstBlobColor=" bg-purple-900"
          secondBlobColor="bg-purple-600"
        />
      </div>
      <HeroTitle />
    </div>
  );
};
