"use client";
import TypingText from "@/app/components/animate/text/typing-text";
import useMobileScreen from "@/app/libs/helpers/useMobileScreen";
import { cn } from "@/app/libs/utils";
import Image from "next/image";
interface PlaywrightSectionProps {
  title: string;
  description: string;
}
export const PlaywrightSection = (props: PlaywrightSectionProps) => {
  const isMobile = useMobileScreen();
  return (
    <div className=" flex flex-row justify-center mt-[10%] mb-[10%]">
      <Image
        className="bg-background-primary-color"
        src="https://static.wikia.nocookie.net/dev/images/f/f3/Playwrighttestsrun.gif/revision/latest/scale-to-width-down/560?cb=20211216121750"
        width={300}
        height={300}
        alt="Playwright Logo"
      />
      <div className="flex flex-col w-[30%] ml-[15%]">
        <p className="text-md Raleway-Regular p-[10px] mb-[20px] self-start ">
          {props.title}
        </p>
        <TypingText waitTime={5000} delay={16} text={`${props.description}`} />
        <a
          href="https://playwright.dev/"
          className="text-md Raleway-Regular mt-[20px]"
        >
          <span className="text-secondary-color">Learn More</span>
        </a>
      </div>
    </div>
  );
};
