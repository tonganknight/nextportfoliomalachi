"use client";
import { AboutMeSectionProps } from "../../types/AboutMeSection";
import useMobileScreen from "../../helpers/useMobileScreen";
import Image from "next/image";
import { TitleSection } from "./TitleSection";
import { AboutMeDescription } from "./AboutMeDescription";
export const AboutMeSection = (AboutMeSectionProps: AboutMeSectionProps) => {
  const isMobile = useMobileScreen();
  const aboutPhoto = AboutMeSectionProps.aboutMeData.photoSRC;
  return (
    <div
      id="ABOUT ME"
      className={
        "flex flex-row justify-center bg-background-secondary-color py-[7%]"
      }
    >
      <Image
        className="ml-[20%] rounded-lg bg-photo-bg-Primary-color"
        height={250}
        width={300}
        src="/Images/Malachi.png"
        alt={"My picture"}
      ></Image>
      <AboutMeDescription />
    </div>
  );
};
