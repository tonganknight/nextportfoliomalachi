"use client";
import { Fragment } from "react";
import { ExpierenceSectionData } from "../../types";
import Image from "next/image";
import { BackGroundBlur } from "../Hero/BackGroundBlur";
import useMobileScreen from "../../helpers/useMobileScreen";
import { cn } from "../../utils";

export const ExpierenceCard = (data: ExpierenceSectionData) => {
  const isMobile = useMobileScreen();

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center ",
        isMobile ? "mt-[560%] mb-[100%]" : "mt-[140%]"
      )}
    >
      {data.Title.map((title, index) => {
        return (
          <Fragment key={index}>
            <BackGroundBlur
              className="mt-[200%]"
              singleBlob={true}
              isMobile={isMobile}
              padding={isMobile ? "p-25" : " p-96 "}
              margin={isMobile ? "mr-[125%]" : ""}
            />
            <div
              className={cn(
                "flex flex-col items-center bg-background-primary-color  rounded-lg  z-20 bg-opacity-80",
                isMobile ? "mb-2" : "h-[25%] w-[50%] mb-6 "
              )}
            >
              <div className=" Raleway-Regulaar text-4xl mb-3 p-6 ">
                {title}
              </div>
              <a href={data.Links[index]}>
                <Image
                  className="rounded-lg bg-opacity-100"
                  height={600}
                  width={500}
                  key={index}
                  src={data.Gif[index]}
                  alt={"gif"}
                />
              </a>
              <div className="Raleway-Regular p-6 w-[85%]">
                {data.Description[index]}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
