import { AboutMeSection } from "./libs/ui-components/AboutMeSection/AboutMeSection";
import { Hero } from "./libs/ui-components/Hero/Hero";
import { NavigationMenu } from "./libs/ui-components/NavigationMenu/NavigationMenu";
import { SkillsSection } from "./libs/ui-components/SkillsSection/SkillsSection";
import { getMappedData } from "./libs/helpers/getMappedData";
import { ExpierenceSection } from "./libs/ui-components/ExpierenceSection";
import { ResumeSection } from "./libs/ui-components/ResumeSection";
import { NavigationBar } from "./libs/ui-components/NavigationMenu/NavigationBar";

export const Main = () => {
  const { NavAnchors, AboutMeData, SkillsData, ExperiencData } =
    getMappedData();
  const testData = {
    url: "test",
    title: "Resume",
    downloadText: "Click here to download a copy of my Resume",
    description:
      "Here is my Resume. Please feel free to click the download link for a PDF copy",
  };
  return (
    <div>
      <NavigationBar
        anchors={NavAnchors.Anchors}
        NavMobileTitle={NavAnchors.NavMobileTitle}
      />
      <Hero />
      <AboutMeSection aboutMeData={AboutMeData} />
      <SkillsSection data={SkillsData} />
      <ExpierenceSection data={ExperiencData} />
      <ResumeSection data={testData} />
    </div>
  );
};
