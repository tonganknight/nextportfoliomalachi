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
      <ExpierenceSectionTitle isMobile={isMobile} title="EXPIERENCE" />
      <div className="flex flex-col justify-center items-center">
        <ExpierenceCard
          data={{
            Title: data.Title,
            Description: data.Description,
            Gif: data.Gif,
            StaticImage: data.StaticImage,
            Links: data.Links,
          }}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};
