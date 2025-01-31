import { SkillsSectionData } from "../types";
import { AboutMeData } from "./AboutMeSection";
import { Anchors } from "./NavBar";
import { cardData, languagesDescription, languagesTitle, playwirghtDescription, playwrightTitle, reactDescription, reactTitle, SkillsTitle, tailWindDescription, tailwindTitle } from "./SkillsSection";

export const MapData = () => {

    const NavBarSectionData = () => {
        return Anchors
    }

    const AboutMeSectionData = () => {
        return AboutMeData
    }

    const SkillSectionData = () =>{
        return <SkillsSectionData>{
            SkillsTitle,
            reactDescription,
            reactTitle,
            tailwindTitle,
            tailWindDescription,
            playwrightTitle,
            playwirghtDescription,
            languagesTitle,
            languagesDescription,
            cardData: cardData
        }
    };


    return {SkillSectionData, NavBarSectionData, AboutMeSectionData}
};