import { AboutMeSection } from "./libs/ui-components/AboutMeSection/AboutMeSection";
import { Hero } from "./libs/ui-components/Hero/Hero";
import { SkillsSection } from "./libs/ui-components/SkillsSection/SkillsSection";
import { getMappedData } from "./libs/helpers/getMappedData";
import { ExpierenceSection } from "./libs/ui-components/ExpierenceSection";
import { NavigationBar } from "./libs/ui-components/NavigationMenu/NavigationBar";
import { ContactSection } from "./libs/ui-components/ContactSection/ContactSection";
import { ProficienciesSection } from "./libs/ui-components/SkillsSection/ProficenciesSection/ProficienciesSection";
import { FooterSection } from "./libs/ui-components/FooterSection";

export const Main = () => {
  const { NavAnchors, AboutMeData, SkillsData, ExperiencData } =
    getMappedData();
  return (
    <div>
      <NavigationBar
        anchors={NavAnchors.Anchors}
        NavMobileTitle={NavAnchors.NavMobileTitle}
      />
      <Hero />
      <AboutMeSection aboutMeData={AboutMeData} />
      <ProficienciesSection
        title={SkillsData.languagesTitle}
        description={SkillsData.languagesDescription}
        cardData={SkillsData.cardData}
      />
      <SkillsSection data={SkillsData} />
      <ExpierenceSection data={ExperiencData} />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
