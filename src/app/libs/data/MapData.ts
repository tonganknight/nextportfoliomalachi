import { ExpierenceSectionData, SkillsSectionData } from "../types";
import { AboutMeData } from "./AboutMeSection";
import { NaturessunshineTitle, NaturesSunshineDescription, NatuesSunshineGif, NaturesSunshineStaticImage, WetXTitle, WetXDescription, WetXGif, WetXStaticImage, TecuityTitle, TecuityDescription, TecuityGif, TecuityStaticImage, NaturesSunshineLink, WetXLink, TecuityLink, UniversityTitle, UniversityofUtahImage, UniversityOfUtahlink, UniversityOfUtahDescription } from "./ExpirenceSection";
import { Anchors, NavMobileTitle } from "./NavBar";
import { cardData, languagesTitle, playwirghtDescription, playwrightTitle, reactDescription, reactTitle, SkillsTitle, tailWindDescription, tailwindTitle } from "./SkillsSection";

export const MapData = () => {

    const NavBarSectionData = () => {
        return{Anchors, NavMobileTitle} 
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
            cardData: cardData
        }
    }

    const ExperienceSectionData = () => {
        return <ExpierenceSectionData> {
            Title: [NaturessunshineTitle, WetXTitle, TecuityTitle, UniversityTitle],
            Description: [NaturesSunshineDescription, WetXDescription, TecuityDescription, UniversityOfUtahDescription],
            Gif: [NatuesSunshineGif, WetXGif, TecuityGif, UniversityofUtahImage],
            StaticImage: [NaturesSunshineStaticImage, WetXStaticImage, TecuityStaticImage, UniversityofUtahImage],
            Links: [NaturesSunshineLink, WetXLink, TecuityLink, UniversityOfUtahlink]
        }
       };
    

    return {SkillSectionData, NavBarSectionData, AboutMeSectionData, ExperienceSectionData}
};