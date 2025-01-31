import { ProficienciesTitle } from "./ProficienciesTitle";
import { ProficienciesSectionDescription } from "./ProficienciesSectionDescription";
import { ProficienciesSectionCards } from "./ProficienciesSectionCards";
import { CardData } from "@/app/libs/types";

interface LanguagesSectionProps {
  title: string;
  description: string;
  cardData: CardData[];
}
export const ProficienciesSection = (props: LanguagesSectionProps) => {
  return (
    <div className="flex flex-col items-center m-[10%]">
      <ProficienciesTitle title={props.title} />
      <ProficienciesSectionDescription description={props.description} />
      <ProficienciesSectionCards cardData={props.cardData} />
    </div>
  );
};
