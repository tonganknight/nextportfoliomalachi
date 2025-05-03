"use client";
import Image from "next/image";
import { CardTags } from "./CardTags";
import { useState } from "react";
import { cn } from "../../utils";
import useMobileScreen from "../../helpers/useMobileScreen";
interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
  projectGIF: string;
  projectTags: string[];
}

export const ProjectCards = ({ props }: { props: ProjectCardProps }) => {
  const isMobile = useMobileScreen();
  const [isHovered, setIsHovered] = useState(false);
  const handlehover = () => {
    setIsHovered((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "flex hover:bg-background-primary-color mt-[7%] w-[80%]",
        isMobile ? "flex-col" : "flex-row"
      )}
      onMouseEnter={handlehover}
      onMouseLeave={handlehover}
    >
      <div
        className={cn(
          "m-8 flex justify-center",
          isMobile ? "flex-col" : "flex-row"
        )}
      >
        <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
          {isHovered ? (
            <Image
              src={props.projectGIF}
              height={195}
              width={460}
              alt={"Projects"}
            />
          ) : (
            <Image
              src={props.projectImage}
              height={195}
              width={460}
              alt={"Projects"}
            />
          )}
        </a>
        <div
          className={cn(
            "flex flex-col text-center",
            isMobile ? "w-full" : "w-[40%]"
          )}
        >
          <div
            className={cn(
              "uppercase text-lg Raleway-Regular font-semibold",
              isMobile && "mt-8"
            )}
          >
            {props.projectTitle}
          </div>
          <div className="text-sm Raleway-Regular font-normal my-8 mx-5">
            {props.projectDescription}
          </div>
          <CardTags tags={props.projectTags} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};
