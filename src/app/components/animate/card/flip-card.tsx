import Image from "next/image";
import { cn } from "../../../libs/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn("group h-56 w-56 [perspective:1000px] m-5", className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden] bg-gradient-to-b from-secondary-color to-primary-color rounded-lg">
          <div className="flex flex-col items-center h-full w-full justify-center">
            <div className="Raleway-Regular pb-3  text-xl font-bold text-white">
              {title}
            </div>
            <Image
              className=""
              src={image}
              alt={"Icon for the launguage"}
              height={100}
              width={100}
            />
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-white p-4 text-black [backface-visibility:hidden]",
            self[1]
          )}
        >
          <div className="flex min-h-full flex-col gap-2 overflow-y-auto">
            {/* <h1 className="text-xl font-bold text-black">{subtitle}</h1> */}
            <p className="overflow-y-auto Raleway-Regular text-based text-centermt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
