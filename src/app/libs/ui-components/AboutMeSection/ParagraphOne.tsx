"use client";
import TextFlip from "@/app/components/animate/text/text-flip";
import { cn } from "../../utils";
import useMobileScreen from "../../helpers/useMobileScreen";

export const ParagraphOne = () => {
  const isMobile = useMobileScreen();
  return (
    <>
      {isMobile ? (
        <p>
          "I’m a Full Stack Web Developer with a passion for new technologies.
          Over the past 4 years, I’ve worked professionally as a
          <span className=" ml-[4px] text-purple-900">React</span> developer,
          where I’ve supported and built features and integrations for modern
          websites. My experience spans a wide range of front-end frameworks,
          and I’m always eager to learn and grow with the latest tech.
        </p>
      ) : (
        <>
          <div className={cn("flex", isMobile ? "flex-col" : "flex-row")}>
            "I’m a Full Stack Web Developer with a passion for new technologies.
            Over the past 4 years, I’ve worked professionally as a
            <div className="mt-[57px] ml-[49px] absolute">
              <TextFlip
                array={["React", "Next", "Angular", "HandleBars", "React"]}
              />
            </div>
          </div>
          <p>
            developer, where I’ve supported and built features and integrations
            for modern websites. My experience spans a wide range of front-end
            frameworks, and I’m always eager to learn and grow with the latest
            tech.
          </p>
        </>
      )}

      <div className="mt-[10px]"></div>
    </>
  );
};
