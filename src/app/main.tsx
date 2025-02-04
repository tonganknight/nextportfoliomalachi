import { AboutMeSection } from "./libs/ui-components/AboutMeSection/AboutMeSection";
import { Hero } from "./libs/ui-components/Hero/Hero";
import { NavigationMenu } from "./libs/ui-components/NavigationMenu/NavigationMenu";
import { SkillsSection } from "./libs/ui-components/SkillsSection/SkillsSection";
import { GetMappedData } from "./libs/helpers/getMappedData";
import { ExpierenceSection } from "./libs/ui-components/ExpierenceSection";

export const Main = () => {
  const { NavAnchors, AboutMeData, SkillsData, ExperiencData } =
    GetMappedData();
  return (
    <div>
      <NavigationMenu
        anchors={NavAnchors.Anchors}
        NavMobileTitle={NavAnchors.NavMobileTitle}
      />
      <Hero />
      <AboutMeSection aboutMeData={AboutMeData} />
      <SkillsSection data={SkillsData} />
      <ExpierenceSection data={ExperiencData} />
    </div>
  );
};
