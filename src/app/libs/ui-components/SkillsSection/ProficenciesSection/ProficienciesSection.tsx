import { ProficienciesTitle } from "../SkillsSectionTitle";
import { ProficienciesSectionDescription } from "./ProficienciesSectionDescription";
import { ProficienciesSectionCards } from "../SkillsSectionCards";

interface LanguagesSectionProps {
  title: string;
  description: string;
}
export const ProficienciesSection = (props: LanguagesSectionProps) => {
  return (
    <div className="flex flex-col items-center m-[10%]">
      <ProficienciesTitle title={props.title} />
      <ProficienciesSectionDescription description={props.description} />
      <ProficienciesSectionCards />
    </div>
  );
};
