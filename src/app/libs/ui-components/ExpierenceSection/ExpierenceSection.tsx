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
      <ExpierenceSectionTitle title="EXPIERENCE" />
      <div className="flex flex-col justify-center items-center h-screen w-screen mt-[7rem]">
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
