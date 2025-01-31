import BlurryBlob from "@/app/components/animate/background/blurry-blob";
import { cn } from "../../utils";

export const BackGroundBlur = (isMobile: { isMobile: boolean }) => {
  return (
    <div className={cn("static", isMobile && "pt-[189px]")}>
      <BlurryBlob
        className="rounded-xl opacity-45"
        firstBlobColor=" bg-purple-900"
        secondBlobColor="bg-purple-600"
      />
    </div>
  );
};
