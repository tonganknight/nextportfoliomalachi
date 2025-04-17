import { cn } from "../../utils";

export const ExpierenceSectionTitle = (props: {
  title: string;
  isMobile: boolean;
}) => {
  return (
    <div id="EXPIRENCE">
      <p
        className={cn(
          "text-3xl Raleway-Regular font-semibold p-[10px]",
          props.isMobile ? "mb-[30%] mt-[10%]" : " mb-[13%] mt-[7%]"
        )}
      >
        {props.title}
      </p>
    </div>
  );
};
