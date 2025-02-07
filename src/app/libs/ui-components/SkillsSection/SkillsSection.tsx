import { PlaywrightSection } from "./Playwright/PlaywrightSection";
import { ReactSection } from "./React/ReactSection";
import { TailWindSection } from "./Tailwind/TailwindSection";
import { ProficienciesSection } from "./ProficenciesSection/ProficienciesSection";
import { SkillsSectionData } from "../../types";
import { SkillsTitle } from "./SkillsTitle";

export const SkillsSection = ({ data }: { data: SkillsSectionData }) => {
  return (
    <div className="flex flex-col items-center mt-[10%]">
      <SkillsTitle title={data.SkillsTitle} />
      <ReactSection
        title={data.reactTitle}
        description={data.reactDescription}
      />
      <TailWindSection
        title={data.tailwindTitle}
        description={data.tailWindDescription}
      />
      <PlaywrightSection
        title={data.playwrightTitle}
        description={data.playwirghtDescription}
      />
      <ProficienciesSection
        title={data.languagesTitle}
        description={data.languagesDescription}
        cardData={data.cardData}
      />
    </div>
  );
};
