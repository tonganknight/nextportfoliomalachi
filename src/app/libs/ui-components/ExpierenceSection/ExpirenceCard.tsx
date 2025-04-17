import { Fragment } from "react";
import { ExpierenceSectionData } from "../../types";
import Image from "next/image";
import { BackGroundBlur } from "../Hero/BackGroundBlur";
import { cn } from "../../utils";
interface ExpierenceCardprop {
  data: ExpierenceSectionData;
  isMobile: boolean;
}
export const ExpierenceCard = (props: ExpierenceCardprop) => {
  return (
    <div className={"flex flex-col justify-center items-center "}>
      {props.data.Title.map((title, index) => {
        return (
          <Fragment key={index}>
            <BackGroundBlur
              className="mt-[54%] "
              singleBlob={true}
              isMobile={props.isMobile}
              padding={props.isMobile ? "p-25" : " p-96 "}
              margin={props.isMobile ? "mr-[125%]" : ""}
              reduceBlare={true}
            />
            <div
              className={cn(
                "flex flex-col items-center bg-background-primary-color rounded-lg z-20 bg-opacity-80",
                props.isMobile ? "mb-[30%]" : "h-[25%] w-[50%] mb-6 "
              )}
            >
              <div className=" Raleway-Regulaar text-4xl mb-3 p-6 ">
                {title}
              </div>
              <a href={props.data.Links[index]} target="_blank">
                <Image
                  className="rounded-lg bg-opacity-100"
                  height={600}
                  width={500}
                  key={index}
                  src={props.data.Gif[index]}
                  alt={"Image of my past work"}
                />
              </a>
              <div className="Raleway-Regular p-6 w-[85%]">
                {props.data.Description[index]}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
