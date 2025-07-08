"use client";
import { AboutMeSectionProps } from "../../types/AboutMeSection";
import useMobileScreen from "../../helpers/useMobileScreen";
import Image from "next/image";
import { AboutMeDescription } from "./AboutMeDescription";
import { cn } from "../../utils";
export const AboutMeSection = (AboutMeSectionProps: AboutMeSectionProps) => {
  const isMobile = useMobileScreen();
  const aboutPhoto = AboutMeSectionProps.aboutMeData.photoSRC;
  return (
    <div
      id="ABOUT ME"
      className={cn(
        "flex justify-center items-start bg-background-secondary-color py-[7%]",
        isMobile ? "flex-col items-center" : "flex-row"
      )}
    >
      <div
        className={cn("flex-shrink-0", isMobile ? "mb-6" : "ml-[20%] mr-8")}
        style={{ width: isMobile ? 300 : 350, height: isMobile ? 350 : 504 }}
      >
        <Image
          className={cn(
            "rounded-lg bg-photo-bg-Primary-color w-full h-full object-cover",
            !isMobile && "mt-[30%]"
          )}
          height={550}
          width={504}
          src="/Images/Malachi.png"
          alt={"My picture"}
        />
      </div>
      <AboutMeDescription isMobile={isMobile} />
    </div>
  );
};
