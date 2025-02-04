import { MapData } from "../data/MapData";

export const GetMappedData = () => {
     const { NavBarSectionData, SkillSectionData, AboutMeSectionData, ExperienceSectionData } = MapData();
     const NavAnchors = NavBarSectionData();
     const AboutMeData = AboutMeSectionData();
     const SkillsData = SkillSectionData();
     const ExperiencData = ExperienceSectionData();
     return {
            NavAnchors,
            AboutMeData,
            SkillsData,
            ExperiencData
     }
}