"use client";
import { ExpierenceSectionData } from "../../types";
import Image from "next/image";
import { BackGroundBlur } from "../Hero/BackGroundBlur";
import useMobileScreen from "../../helpers/useMobileScreen";

export const ExpierenceCard = (data: ExpierenceSectionData) => {
  const isMobile = useMobileScreen();
  return (
    <div className="flex flex-col justify-center items-center mt-[140%]">
      {data.Title.map((title, index) => {
        return (
          <>
            <BackGroundBlur
              className="mt-[200%]"
              singleBlob={true}
              isMobile={isMobile}
              padding={"p-96"}
            />
            <div
              key={index}
              className="flex flex-col items-center bg-background-primary-color h-[25%] w-[50%] rounded-lg  mb-6 z-20 bg-opacity-80"
            >
              <div key={index} className=" Raleway-Regulaar text-4xl mb-3 p-6 ">
                {title}
              </div>
              <a href={data.Links[index]} key={index}>
                <Image
                  className="rounded-lg bg-opacity-100"
                  height={600}
                  width={500}
                  key={index}
                  src={data.Gif[index]}
                  alt={"gif"}
                />
              </a>
              <div className="Raleway-Regular p-6 w-[85%]" key={index}>
                {data.Description[index]}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
