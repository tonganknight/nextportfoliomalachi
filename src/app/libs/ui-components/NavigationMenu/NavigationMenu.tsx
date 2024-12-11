"use client";

import { useState } from "react";
import useMobileScreen from "../../helpers/useMobileScreen";

interface NavigationMenuProps {
  anchors: string[];
}

export const NavigationMenu = (props: NavigationMenuProps) => {
  const isMoble = useMobileScreen();
  const [onMouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver((prev) => !prev);
  };
  return (
    <>
      {isMoble ? (
        <div className="flex justify-center p-3 position: sticky;">
          Malachi Alusa
        </div>
      ) : (
        <nav>
          <ul className={"flex flex-row justify-evenly p-4"}>
            {props.anchors.map((anchor) => (
              <li key={anchor}>
                <a
                  className="hover:bg-gradient-to-r from-purple-600 to-purple-900 hover:opacity-80 rounded-3xl p-3"
                  href={`#${anchor}`}
                >
                  {anchor}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
