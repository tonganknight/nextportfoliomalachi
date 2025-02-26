interface SkillsSectiontitleProps {
  title: string;
}

export const ProficienciesTitle = (props: SkillsSectiontitleProps) => {
  return (
    <p className="text-3xl Raleway-Regular font-semibold py-[7%]">
      {props.title}
    </p>
  );
};
