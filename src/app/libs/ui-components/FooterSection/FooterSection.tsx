"use client";
import Image from "next/image";
import { Button } from "../Buttons";
import { cn } from "../../utils";
import useMobileScreen from "../../helpers/useMobileScreen";

export const FooterSection = () => {
  const isMobile = useMobileScreen();
  return (
    <div
      className={
        "flex flex-col w-full  items-center text-center bg-primary-color"
      }
    >
      <div className="flex h-[90%] justify-center bg-primary-color">
        <Image
          className={cn(" bg-transparent-0", isMobile ? "py-[15%]" : "mt-[8%]")}
          src="/Images/Logo Vertical.png"
          alt={""}
          height={isMobile ? 100 : 400}
          width={isMobile ? 100 : 400}
        />
      </div>
      <p className=" text-xs mt-[2%] pb-7">
        Copyright 2025 Alusa Solutions All Rights Reserved
      </p>
    </div>
  );
};
