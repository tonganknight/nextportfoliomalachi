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
          height={400}
          width={400}
        />
      </div>
      <Button className="mt-3" isLink={true} variation="primary">
        DOWNLOAD RESUME
      </Button>
      <div className="flex flex-row items-center justify-center mt-[5%]">
        <a className="mr-[5%]" href="https://github.com/tonganknight">
          <Image
            src="https://cdn.iconfinder.com/stored_data/2033260/128/png?token=1734197252-PXZubYcV%2BBCEt8gv99nb2dVjSluerugEgHo5QhQl6K0%3D"
            alt={"Git Hub Logo"}
            height={35}
            width={30}
          />
        </a>
        <a href="https://www.linkedin.com/in/malachi-alusa-a96439174/">
          <Image
            src="https://cdn.iconfinder.com/stored_data/2033257/128/png?token=1734196838-V3F95U87KitnZhmJFmHMUUsFdAaeQAfetzqlG4fcqfA%3D"
            alt={"linkedIn Logo"}
            height={35}
            width={30}
          />
        </a>
      </div>
      <p className="mt-[2%]">
        Copyright 2025 Alusa Solutions All Rights Reserved
      </p>
    </div>
  );
};
