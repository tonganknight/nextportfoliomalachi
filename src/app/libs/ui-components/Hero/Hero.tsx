import BlurryBlob from "@/app/components/animate/background/blurry-blob";
import { HeroTitle } from "./HeroTitle";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen mt-48">
      <div className="static">
        <BlurryBlob
          className="rounded-xl opacity-45"
          firstBlobColor=" bg-purple-900"
          secondBlobColor="bg-purple-600"
        />
      </div>
      <HeroTitle />
    </div>
  );
};
