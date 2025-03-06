"use client";

import useMobileScreen from "../../helpers/useMobileScreen";
import { cn } from "../../utils";

export const NavHeader = () => {
  const isMobile = useMobileScreen();
  return (
    <div
      className={cn(
        "flex bg-primary-color",
        isMobile
          ? "flex-col justify-center text-center"
          : "flex-row justify-end h-[37px]"
      )}
    >
      <a
        href="#CONTACT ME"
        className={cn(
          "text-xs text-center Raleway-Regular font-semibold  font-semibold",
          isMobile ? "py-[12px]" : "pr-6 pt-[12px] "
        )}
      >
        CONTACT ME
      </a>
      <a
        className={cn(
          "bg-black border-opacity-50",
          isMobile ? "" : "mr-[98px]"
        )}
        href="/Images/Malachi Web Dev 2025.pdf"
        download="Resume Malachi Alusa PDF"
      >
        <p
          className={cn(
            "text-xs text-center Raleway-Regular font-semibold bg-black  font-semibold",
            isMobile ? "py-[12px]" : "mr-12 pl-12 pt-[12px] "
          )}
        >
          DOWNLOAD RESUME
        </p>
      </a>
    </div>
  );
};
