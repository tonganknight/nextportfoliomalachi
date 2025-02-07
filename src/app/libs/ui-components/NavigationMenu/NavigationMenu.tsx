"use client";
import useMobileScreen from "../../helpers/useMobileScreen";
import { NavigationLogo } from "./NavigationLogo";

interface NavigationMenuProps {
  anchors: string[];
  NavMobileTitle: string;
}

export const NavigationMenu = ({
  anchors,
  NavMobileTitle,
}: NavigationMenuProps) => {
  const isMoble = useMobileScreen();

  return (
    <div>
      {isMoble ? (
        <p className="font-Raleway-Regular flex justify-center p-3 ">
          {NavMobileTitle}
        </p>
      ) : (
        <nav className="flex flex-row bg-black">
          <NavigationLogo />
          <div className="flex ml-[8%]">
            <ul
              className={
                "flex flex-row justify-space p-4 Raleway-Regular bg-black z-50"
              }
            >
              {anchors.map((anchor) => (
                <li key={anchor} className="px-6 ">
                  <a
                    className="hover:text-purple-600 rounded-3xl p-3 text-lg Raleway-Regular font-bold"
                    href={`#${anchor}`}
                  >
                    {anchor}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};
