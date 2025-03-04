"use client";
import FlipCard from "@/app/components/animate/card/flip-card";
import { CardData } from "../../../types";
import { groupIntoRows } from "@/app/libs/helpers/getCardRows";
import { cn } from "@/app/libs/utils";
import useMobileScreen from "@/app/libs/helpers/useMobileScreen";

export const ProficienciesSectionCards = (cardData: {
  cardData: CardData[];
}) => {
  const isMobile = useMobileScreen();
  const rows = groupIntoRows(cardData.cardData, 4);
  return (
    <div className="flex flex-col">
      {rows.map((row, rowIndex) => (
        <div
          className={cn(" flex pt-3", isMobile ? "flex-col" : "flex-row")}
          key={rowIndex}
        >
          {row.map((card, index) => (
            <FlipCard
              key={index}
              description={card.description}
              image={card.image}
              rotate="y"
              subtitle={card.subtitle}
              title={card.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
