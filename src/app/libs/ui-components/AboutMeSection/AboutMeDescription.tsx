"use client";
import { cn } from "../../utils";
import { AboutMeTitleSection } from "./TitleSection";
export const AboutMeDescription = ({ isMobile }: { isMobile: Boolean }) => {
  return (
    <div
      className={cn(
        "flex flex-col  ml-[10%]",
        isMobile ? "items-center" : "items-start"
      )}
    >
      <AboutMeTitleSection title={"About Me"} />
      <p className={cn("ext-sm w-[70%]", isMobile && "text-center")}>
        Hi, I’m Malachi — a driven and adaptable full stack developer with a
        strong foundation in modern JavaScript frameworks like React, Angular,
        and Next.js, and real-world experience in building scalable,
        user-focused web applications. At Nature’s Sunshine, I help bring
        digital projects to life, collaborating across teams to create seamless
        UI experiences. My prior work at WETx and Tecuity deepened my testing
        and QA expertise, where I wrote automated regression tests using
        Playwright and TypeScript, ensuring high product reliability for
        state-level software systems. What sets me apart is my unique blend of
        software development and testing experience. I understand what makes
        applications not only functional, but also stable, performant, and
        user-friendly. Whether it’s squashing bugs, shipping features, or
        optimizing the dev workflow, I bring a team-first mentality and a hunger
        to keep learning. If you're hiring a junior-to-mid-level dev with a
        strong work ethic and a solid foundation — let’s connect!
      </p>
    </div>
  );
};
