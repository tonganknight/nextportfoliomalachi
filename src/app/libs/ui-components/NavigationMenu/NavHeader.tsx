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
      <p className=" text-xs pr-6 text-center Raleway-Regular font-semibold pt-[12px] font-semibold">
        CONTACT ME
      </p>
      <a
        className={cn(
          "bg-black border-opacity-50",
          isMobile ? "" : "mr-[98px]"
        )}
        href="/Images/ResumePlaceHolder.pdf"
        download="Resume Malachi Alusa PDF"
      >
        <p
          className={cn(
            "text-xs text-center Raleway-Regular font-semibold pt-[12px] bg-black  font-semibold",
            isMobile ? "" : "mr-12 pl-12"
          )}
        >
          DOWNLOAD RESUME
        </p>
      </a>
    </div>
  );
};
