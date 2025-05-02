"use client";
import useMobileScreen from "../../helpers/useMobileScreen";
import { cn } from "../../utils";

export const AboutMeTitleSection = ({ title }: { title: string }) => {
  const isMobile = useMobileScreen();
  return (
    <p
      className={cn(
        "text-3xl Raleway-Regular p-[10px] font-semibold mb-10",
        isMobile && " items-center text-center mt-3"
      )}
    >
      {title}
    </p>
  );
};
