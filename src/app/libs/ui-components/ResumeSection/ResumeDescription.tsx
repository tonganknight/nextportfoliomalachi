interface ResumeDescriptionProps {
  description: string;
}
export const ResumeDescription = (props: ResumeDescriptionProps) => {
  return (
    <div id="Resume">
      <p className="pb-5 font-RussoOne-Regular text-xl text-center">
        {props.description}
      </p>
    </div>
  );
};
