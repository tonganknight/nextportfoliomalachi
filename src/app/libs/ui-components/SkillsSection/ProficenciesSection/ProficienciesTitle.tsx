interface SkillsSectiontitleProps {
  title: string;
}

export const ProficienciesTitle = (props: SkillsSectiontitleProps) => {
  return (
    <p className="text-4xl font-RussoOne-Regular p-[10px] mb-[10px]">
      {props.title}
    </p>
  );
};
