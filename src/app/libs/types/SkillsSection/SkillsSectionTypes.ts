export interface CardData {
    title: string;
    description: string;
    image: string,
    subtitle?: string;
}

export interface SkillsSectionData {
    SkillsTitle: string;
    reactDescription: string;
    reactTitle: string;
    tailwindTitle: string;
    tailWindDescription: string;
    playwrightTitle: string;
    playwirghtDescription: string;
    languagesTitle: string;
    languagesDescription: string;
    cardData: CardData[];
}