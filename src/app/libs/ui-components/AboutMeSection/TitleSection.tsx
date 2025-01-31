import useMobileScreen from "../../helpers/useMobileScreen";
import Image from "next/image";
import { cn } from "../../utils";
interface TitleSectionProps {
  photoSRC: string;
}

export const TitleSection = ({ photoSRC }: TitleSectionProps) => {
  const isMobile = useMobileScreen();
  return (
    <div className=" flex flex-col items-center">
      <p
        className={cn(
          "text-6xl font-RussoOne-Regular p-[10px]",
          isMobile && "text-center"
        )}
      >
        About Me
      </p>
      <Image
        className="mt-[25px] p-[10px]"
        src={photoSRC}
        alt="About Me"
        width={350}
        height={350}
      />
    </div>
  );
};
