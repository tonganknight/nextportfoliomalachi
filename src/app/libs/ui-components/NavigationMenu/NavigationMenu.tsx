"use client";
import useMobileScreen from "../../helpers/useMobileScreen";

interface NavigationMenuProps {
  anchors: string[];
}

export const NavigationMenu = (props: NavigationMenuProps) => {
  const isMoble = useMobileScreen();

  return (
    <div className="sticky top-0 z-50">
      {isMoble ? (
        <p className="flex justify-center p-3 font-RussoOne-Regular">
          Malachi Alusa-
        </p>
      ) : (
        <nav>
          <ul
            className={
              "flex flex-row justify-evenly p-4 font-RussoOne-Regular bg-black z-50"
            }
          >
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
    </div>
  );
};
