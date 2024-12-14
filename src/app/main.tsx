import BlurryBlob from "./components/animate/background/blurry-blob";
import { Hero } from "./libs/ui-components/Hero/Hero";
import { NavigationMenu } from "./libs/ui-components/NavigationMenu/NavigationMenu";

// List of Anchors for Nav Bar
const anchors = ["Home", "About me", "Experience", "Skills", "Work History"];
export const Main = () => {
  return (
    <div id="Home">
      <NavigationMenu anchors={anchors} />
      <Hero />
    </div>
  );
};
