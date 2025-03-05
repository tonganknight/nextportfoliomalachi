"use client";
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
        "flex justify-center",
        isMobile ? "flex-col items-center" : "flex--row"
      )}
    >
      <ReactIcon />
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
          href="https://nextjs.org/"
          className="text-md Raleway-Regular mt-[20px]"
          target="_blank"
        >
          <span className="text-secondary-color">Learn More</span>
        </a>
      </div>
    </div>
  );
};
