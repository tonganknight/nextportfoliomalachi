"use client";
import { cn } from "../../utils";
import { TitleSection } from "./TitleSection";
export const AboutMeDescription = ({ isMobile }: { isMobile: Boolean }) => {
  return (
    <div
      className={cn(
        "flex flex-col  ml-[10%]",
        isMobile ? "items-center" : "items-start"
      )}
    >
      <TitleSection />
      <p className={cn("ext-sm w-[70%]", isMobile && "text-center")}>
        I’m a Full Stack Web Developer with a passion for new technologies. Over
        the past 4 years, I’ve worked professionally as a React developer, where
        I’ve supported and built features and integrations for modern websites.
        My experience spans a wide range of front-end frameworks, and I’m always
        eager to learn and grow with the latest tech. My approach to development
        revolves around collaboration and communication. I focus on
        understanding the goals of each project to create tailored solutions
        that align with and unite the vision of both the client and the
        end-users. I emphasize writing clean, reusable, and scalable code,
        ensuring that the solutions I build are long-lasting and easy to update
        as needs evolve. When I’m not coding, you can usually find me spending
        time with my family or experimenting with new tech innovations.
      </p>
    </div>
  );
};
