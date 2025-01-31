import { PlaywrightSection } from "./Playwright/PlaywrightSection";
import { ReactSection } from "./React/ReactSection";
import { TailWindSection } from "./Tailwind/TailwindSection";
import { ProficienciesSection } from "./ProficenciesSection/ProficienciesSection";
import { SkillsSectionData } from "../../types";

export const SkillsSection = ({ data }: { data: SkillsSectionData }) => {
  return (
    <div id="Skills" className="flex flex-col items-center mt-[10%]">
      <p className="text-6xl font-RussoOne-Regular p-[10px] mb-[25px]">
        Skills
      </p>
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
      />
    </div>
  );
};
