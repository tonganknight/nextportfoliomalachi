"use client";
import { AboutMeSectionProps } from "../../types/AboutMeSection";
import { cn } from "../../utils";
import useMobileScreen from "../../helpers/useMobileScreen";
import { ParagraphOne } from "./ParagraphOne";
import { ParagraphTwo } from "./ParagraphTwo";
import { TitleSection } from "./TitleSection";
export const AboutMeSection = (AboutMeSectionProps: AboutMeSectionProps) => {
  const isMobile = useMobileScreen();
  const aboutPhoto = AboutMeSectionProps.aboutMeData.photoSRC;
  return (
    <div
      id="About Me"
      className={cn("flex ml-[13%]", isMobile ? "flex-col" : "flex-row")}
    >
      <TitleSection photoSRC={aboutPhoto} />
      <div
        className={cn(
          " p-[3%] mt-[8%] font-RussoOne-Regular text-xl",
          isMobile ? "w-[97%]" : "w-[65%]"
        )}
      >
        <ParagraphOne />
        <ParagraphTwo />
        <div className="mt-[25px]"></div>
        <p>{AboutMeSectionProps.aboutMeData.P3}</p>
      </div>
    </div>
  );
};
