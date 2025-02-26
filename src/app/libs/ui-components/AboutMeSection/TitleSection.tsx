import useMobileScreen from "../../helpers/useMobileScreen";
import { cn } from "../../utils";

export const TitleSection = () => {
  const isMobile = useMobileScreen();
  return (
    <p
      className={cn(
        "text-3xl Raleway-Regular p-[10px] font-semibold mb-10",
        isMobile && "text-center"
      )}
    >
      ABOUT ME
    </p>
  );
};
