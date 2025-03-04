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
        "flex justify-center bg-background-secondary-color py-[7%]",
        isMobile ? "flex-col" : "flex-row"
      )}
    >
      <Image
        className={cn(
          "rounded-lg bg-photo-bg-Primary-color",
          isMobile ? "ml-[12%]" : "ml-[20%]"
        )}
        height={250}
        width={300}
        src="/Images/Malachi.png"
        alt={"My picture"}
      ></Image>
      <AboutMeDescription isMobile={isMobile} />
    </div>
  );
};
