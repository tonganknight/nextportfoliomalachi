import BlurryBlob from "@/app/components/animate/background/blurry-blob";

interface BackGroundBlurProps {
  isMobile: boolean;
  className?: string;
  padding?: string;
  margin?: string;
  singleBlob?: boolean;
}

export const BackGroundBlur = (data: BackGroundBlurProps) => {
  return (
    <div>
      <BlurryBlob
        className={`rounded-xl opacity-45 z-10 ${
          data.className ? data.className : ""
        }`}
        firstBlobColor=" bg-purple-900"
        secondBlobColor="bg-purple-600"
        margin={data.margin ? data.margin : ""}
        padding={data.padding ? data.padding : ""}
        singleBlob={data.singleBlob}
        isMobile={data.isMobile}
      />
    </div>
  );
};
