"use client";
import { BackGroundBlur } from "../Hero/BackGroundBlur";
import { ExpierenceSectionTitle } from "./ExpierenceTitle";
import useMobileScreen from "../../helpers/useMobileScreen";
import { ExpierenceCard } from "./ExpirenceCard";
import { ExpierenceSectionData } from "../../types";

export const ExpierenceSection = ({
  data,
}: {
  data: ExpierenceSectionData;
}) => {
  const isMobile = useMobileScreen();
  return (
    <div className="flex flex-col text-center">
      <ExpierenceSectionTitle title="Expierence" />
      <div className="flex justify-center items-center h-screen w-screen mt-[7rem]">
        <BackGroundBlur
          isMobile={isMobile}
          padding={"p-80"}
          margin={"ml-[70px]"}
        />
        <div className="mt-[150%]">
          <BackGroundBlur
            isMobile={isMobile}
            padding={"p-80"}
            margin={"mr-[50px]"}
          />
        </div>
        <ExpierenceCard
          Title={data.Title}
          Description={data.Description}
          Gif={data.Gif}
          StaticImage={data.StaticImage}
          Links={data.Links}
        />
      </div>
    </div>
  );
};
