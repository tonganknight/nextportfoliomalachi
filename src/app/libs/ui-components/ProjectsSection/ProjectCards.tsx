"use client";
import Image from "next/image";
import { CardTags } from "./CardTags";
import { useState } from "react";
import { p } from "framer-motion/client";
interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
  projectGIF: string;
  projectTags: string[];
}

export const ProjectCards = ({ props }: { props: ProjectCardProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handlehover = () => {
    setIsHovered((prev) => !prev);
  };
  return (
    <div
      className="flex flex-row hover:bg-background-primary-color mt-[7%] w-[80%]"
      onMouseEnter={handlehover}
      onMouseLeave={handlehover}
    >
      <div className="m-8 flex flex-row justify-center">
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
        <div className="flex flex-col text-center w-[40%]">
          <div className="uppercase text-lg Raleway-Regular font-semibold">
            {props.projectTitle}
          </div>
          <div className="text-sm Raleway-Regular font-normal my-8 mx-5">
            {props.projectDescription}
          </div>
          <CardTags tags={props.projectTags} />
        </div>
      </div>
    </div>
  );
};
