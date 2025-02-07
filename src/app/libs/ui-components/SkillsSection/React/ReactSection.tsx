"use client";
import TypingText from "@/app/components/animate/text/typing-text";
import { ReactIcon } from "@/app/components/React-Icon";
import useMobileScreen from "@/app/libs/helpers/useMobileScreen";
import { cn } from "@/app/libs/utils";
interface ReactSectionProps {
  title: string;
  description: string;
}

export const ReactSection = (props: ReactSectionProps) => {
  const isMobile = useMobileScreen();
  return (
    <div
      className={cn(
        "flex",
        isMobile ? "flex-col items-center text-center" : "flex-row"
      )}
    >
      <div className="flex flex-col items-center w-[50%]">
        <p className="text-4xl font-RussoOne-Regular p-[10px] mb-[10px]">
          {props.title}
        </p>
        <ReactIcon />
      </div>
      <div className=" ml-5 mr-[212px] mt-[90px] font-RussoOne-Regular text-xl w-[50%] items-center">
        <TypingText waitTime={5000} delay={16} text={`${props.description}`} />
      </div>
    </div>
  );
};
