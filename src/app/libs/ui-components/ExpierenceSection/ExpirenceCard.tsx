import { ExpierenceSectionData } from "../../types";
import Image from "next/image";

export const ExpierenceCard = (data: ExpierenceSectionData) => {
  return (
    <div className="flex absolute flex-col justify-center items-center mt-[140%]">
      {data.Title.map((title, index) => {
        return (
          <div className="flex flex-col items-center bg-black h-[25%] w-[50%] rounded-lg  mb-6 ">
            <div className="font-RussoOne-Regular text-4xl mb-3 p-6">
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
            <div className="font-RussoOne-Regular p-6 w-[85%]">
              {data.Description[index]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
