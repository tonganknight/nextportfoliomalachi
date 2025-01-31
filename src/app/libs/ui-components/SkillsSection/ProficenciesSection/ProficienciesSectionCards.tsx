import FlipCard from "@/app/components/animate/card/flip-card";
import { CardData } from "../../../types";
import { groupIntoRows } from "@/app/libs/helpers/getCardRows";

export const ProficienciesSectionCards = (cardData: {
  cardData: CardData[];
}) => {
  const rows = groupIntoRows(cardData.cardData, 4);
  return (
    <div className="flex flex-col">
      {rows.map((row, rowIndex) => (
        <div className="flex flex-row pt-5" key={rowIndex}>
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
