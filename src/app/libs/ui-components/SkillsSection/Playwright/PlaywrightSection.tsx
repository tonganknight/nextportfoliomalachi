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
    <div
      className={cn(
        "flex flex-row justify-center mt-[10%] mb-[10%]",
        isMobile ? "flex-col items-center " : "flex-row "
      )}
    >
      <Image
        className="bg-background-primary-color"
        src="https://static.wikia.nocookie.net/dev/images/f/f3/Playwrighttestsrun.gif/revision/latest/scale-to-width-down/560?cb=20211216121750"
        width={300}
        height={300}
        alt="Playwright Logo"
      />
      <div
        className={cn(
          "flex flex-col",
          isMobile ? "text-center" : " w-[30%] ml-[15%]"
        )}
      >
        <p
          className={cn(
            "text-md Raleway-Regular p-[10px] mb-[20px] ",
            isMobile ? "self-center" : "self-start"
          )}
        >
          {props.title}
        </p>
        {props.description}
        <a
          target="_blank"
          href="https://playwright.dev/"
          className="text-md Raleway-Regular mt-[20px]"
        >
          <span className="text-secondary-color">Learn More</span>
        </a>
      </div>
    </div>
  );
};
