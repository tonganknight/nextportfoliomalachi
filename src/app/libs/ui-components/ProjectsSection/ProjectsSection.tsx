import { ProjectSectionCardType } from "../../types";
import { ProjectCards } from "./ProjectCards";

interface ProjectsSectionProps {
  title: string;
  id: string;
  projectCardsData: any[];
}
export const ProjectsSection = (props: ProjectsSectionProps) => {
  return (
    <div id={"PROJECTS"} className="flex flex-col text-ceter items-center">
      <p className="uppercase text-center text-3xl Raleway-Regular font-semibold pt-[7%]">
        {props.title}
      </p>
      {props.projectCardsData.map((projectData, index) => {
        return (
          <ProjectCards
            key={index}
            props={{
              projectTitle: projectData.projectTitle,
              projectDescription: projectData.projectDescription,
              projectLink: projectData.projectLink,
              projectImage: projectData.projectImage,
              projectGIF: projectData.projectGIF,
              projectTags: projectData.projectTags,
            }}
          />
        );
      })}
    </div>
  );
};
