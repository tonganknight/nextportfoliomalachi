import { ShowContent } from "@/app/libs/ui-components/Helpers";
import { cn } from "../../../libs/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
  padding?: string;
  className?: string;
  margin?: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
  padding,
  margin,
}: BlobProps) {
  return (
    <div className="min-h-52 min-w-52 items-center justify-center">
      <div className={`relative w-full max-w-lg ${margin}`}>
        <div
          className={cn(
            `absolute -right-24 -top-28 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 blur-3xl filter ${padding}`,
            className,
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            `absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 blur-3xl filter ${padding}`,
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}
