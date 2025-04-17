import { ShowContent } from "@/app/libs/ui-components/Helpers";
import { cn } from "../../../libs/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
  isMobile: boolean;
  padding?: string;
  className?: string;
  margin?: string;
  singleBlob?: boolean;
  reduceBlare?: boolean;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
  padding,
  margin,
  singleBlob,
  isMobile,
  reduceBlare,
}: BlobProps) {
  const topMesurement = reduceBlare ? "top-[2rem]" : "top-[-13rem]";
  return (
    <div className="min-w-52 items-center justify-center">
      <div className={cn("relative w-full max-w-lg", !isMobile && "mb-[-75%]")}>
        <div
          className={cn(
            `absolute right-[-16rem] ${
              !isMobile && topMesurement
            } h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 blur-3xl filter ${padding} ${margin}`,
            className,
            firstBlobColor
          )}
        ></div>
        <ShowContent state={!singleBlob}>
          <div
            className={cn(
              `absolute left-[-1rem] top-[-21rem] h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 blur-3xl filter ${padding}`,
              className,
              secondBlobColor
            )}
          ></div>
        </ShowContent>
      </div>
    </div>
  );
}
