import BlurryBlob from "@/app/components/animate/background/blurry-blob";
import { cn } from "../../utils";
interface BackGroundBlurProps {
  isMobile: boolean;
  className?: string;
  padding?: string;
  margin?: string;
}

export const BackGroundBlur = (data: BackGroundBlurProps) => {
  console.log(data.padding);
  return (
    <div className={cn("static", data.isMobile && "pt-[189px]")}>
      <BlurryBlob
        className={`rounded-xl opacity-45 ${
          data.className ? data.className : ""
        }`}
        firstBlobColor=" bg-purple-900"
        secondBlobColor="bg-purple-600"
        margin={data.margin ? data.margin : ""}
        padding={data.padding ? data.padding : ""}
      />
    </div>
  );
};
