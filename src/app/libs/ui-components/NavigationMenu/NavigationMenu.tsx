"use client";
import useMobileScreen from "../../helpers/useMobileScreen";
import { cn } from "../../utils";
import { NavigationLogo } from "./NavigationLogo";

interface NavigationMenuProps {
  anchors: string[];
}

export const NavigationMenu = ({ anchors }: NavigationMenuProps) => {
  const isMoble = useMobileScreen();

  return (
    <div>
      <nav className={cn("flex flex-row ", isMoble ? "" : "bg-black")}>
        {!isMoble && <NavigationLogo />}
        <div className={cn("flex ", isMoble ? "ml-[14%]" : "ml-[8%]")}>
          <ul
            className={cn(
              "flex flex-row  Raleway-Regular bg-black z-50",
              isMoble ? "" : "justify-space p-4"
            )}
          >
            {anchors.map((anchor) => (
              <li key={anchor} className={isMoble ? "" : "px-6"}>
                <a
                  className={cn(
                    "hover:text-primary-color rounded-3xl  Raleway-Regular font-semibold",
                    isMoble ? "text-xs m-2 text-center" : "p-3 text-md"
                  )}
                  href={`#${anchor}`}
                >
                  {anchor}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
