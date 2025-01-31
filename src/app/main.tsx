import { AboutMeSection } from "./libs/ui-components/AboutMeSection/AboutMeSection";
import { Hero } from "./libs/ui-components/Hero/Hero";
import { NavigationMenu } from "./libs/ui-components/NavigationMenu/NavigationMenu";
import { SkillsSection } from "./libs/ui-components/SkillsSection/SkillsSection";
import { MapData } from "./libs/data/MapData";

export const Main = () => {
  const { NavBarSectionData, SkillSectionData, AboutMeSectionData } = MapData();
  const NavAnchors = NavBarSectionData();
  const AboutMeData = AboutMeSectionData();
  const SkillsData = SkillSectionData();

  return (
    <div>
      <NavigationMenu anchors={NavAnchors} />
      <Hero />
      <AboutMeSection aboutMeData={AboutMeData} />
      <SkillsSection data={SkillsData} />
    </div>
  );
};
