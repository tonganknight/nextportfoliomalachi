"use client";
import Image from "next/image";
import { Button } from "../Buttons";
import { cn } from "../../utils";
import useMobileScreen from "../../helpers/useMobileScreen";
interface FooterSectionProps {
  imageSrc: string;
  imageAlt: string;
  faceBookSrc: string;
  faceBookHref: string;
  gitSrc: string;
  gitHref: string;
}

export const FooterSection = () => {
  const isMobile = useMobileScreen();
  if (isMobile) return null;
  return (
    <div
      className={cn(
        "flex flex-col w-full  items-center text-center bg-primary-color",
        isMobile ? "mt-[10%]" : ""
      )}
    >
      <div className="bg-secondary-color h-[30px]"></div>
      <div className="flex h-[90%] justify-center bg-primary-color">
        <Image
          className="mt-[8%] bg-transparent-0"
          src="/Images/Logo Vertical.png"
          alt={""}
          height={isMobile ? 100 : 400}
          width={400}
        />
      </div>
      <p className="mt-[2%]">
        Copyright 2025 Alusa Solutions All Rights Reserved
      </p>
    </div>
  );
};
