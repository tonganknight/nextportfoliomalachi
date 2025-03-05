import { cn } from "../../utils";

export const ExpierenceSectionTitle = (props: {
  title: string;
  isMobile: boolean;
}) => {
  return (
    <div id="EXPIRENCE">
      <p
        className={cn(
          "text-3xl Raleway-Regular font-semibold p-[10px]  mt-[10%]",
          props.isMobile ? "mb-[30%]" : " mb-[13%]"
        )}
      >
        {props.title}
      </p>
    </div>
  );
};
