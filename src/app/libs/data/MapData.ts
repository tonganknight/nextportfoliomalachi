import { ExpierenceSectionData, SkillsSectionData } from "../types";
import { AboutMeData } from "./AboutMeSection";
import { NaturessunshineTitle, NaturesSunshineDescription, NatuesSunshineGif, NaturesSunshineStaticImage, WetXTitle, WetXDescription, WetXGif, WetXStaticImage, TecuityTitle, TecuityDescription, TecuityGif, TecuityStaticImage, NaturesSunshineLink, WetXLink, TecuityLink } from "./ExpirenceSection";
import { Anchors, NavMobileTitle } from "./NavBar";
import { cardData, languagesDescription, languagesTitle, playwirghtDescription, playwrightTitle, reactDescription, reactTitle, SkillsTitle, tailWindDescription, tailwindTitle } from "./SkillsSection";

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
            languagesDescription,
            cardData: cardData
        }
    }

    const ExperienceSectionData = () => {
        return <ExpierenceSectionData> {
            Title: [NaturessunshineTitle, WetXTitle, TecuityTitle],
            Description: [NaturesSunshineDescription, WetXDescription, TecuityDescription],
            Gif: [NatuesSunshineGif, WetXGif, TecuityGif],
            StaticImage: [NaturesSunshineStaticImage, WetXStaticImage, TecuityStaticImage],
            Links: [NaturesSunshineLink, WetXLink, TecuityLink]
        }
       };
    

    return {SkillSectionData, NavBarSectionData, AboutMeSectionData, ExperienceSectionData}
};