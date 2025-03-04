"use client";
import useMobileScreen from "../../helpers/useMobileScreen";
import { NavHeader } from "./NavHeader";
import { NavigationMenu } from "./NavigationMenu";
interface NavigationBarProps {
  anchors: string[];
}
export const NavigationBar = (data: NavigationBarProps) => {
  const isMoble = useMobileScreen();
  return (
    <div className="sticky top-0 z-50">
      <NavHeader />
      {!isMoble && <NavigationMenu anchors={data.anchors} />}
    </div>
  );
};
