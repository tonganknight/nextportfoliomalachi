import { NavHeader } from "./NavHeader";
import { NavigationMenu } from "./NavigationMenu";
interface NavigationBarProps {
  anchors: string[];
  NavMobileTitle: string;
}
export const NavigationBar = (data: NavigationBarProps) => {
  return (
    <div className="sticky top-0 z-50">
      <NavHeader />
      <NavigationMenu
        anchors={data.anchors}
        NavMobileTitle={data.NavMobileTitle}
      />
    </div>
  );
};
