interface SkillsSectionDescriptionProps {
  description: string;
}
export const ProficienciesSectionDescription = (
  props: SkillsSectionDescriptionProps
) => {
  return (
    <p className="pb-5 font-RussoOne-Regular text-xl text-center">
      {props.description}
    </p>
  );
};
