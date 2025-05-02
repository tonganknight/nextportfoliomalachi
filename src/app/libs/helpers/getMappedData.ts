import { MapData } from "../data/MapData";

export const getMappedData = () => {
     const { NavBarSectionData, SkillSectionData, AboutMeSectionData, ExperienceSectionData, ProjectsSectionData } = MapData();
     const NavAnchors = NavBarSectionData();
     const AboutMeData = AboutMeSectionData();
     const SkillsData = SkillSectionData();
     const ExperiencData = ExperienceSectionData();
     const ProjectsData= ProjectsSectionData();
     return {
            NavAnchors,
            AboutMeData,
            SkillsData,
            ExperiencData,
            ProjectsData
     }
}