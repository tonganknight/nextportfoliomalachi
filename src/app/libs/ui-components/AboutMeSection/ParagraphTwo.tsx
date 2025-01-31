"use client";
import TextFlip from "@/app/components/animate/text/text-flip";
import useMobileScreen from "../../helpers/useMobileScreen";

export const ParagraphTwo = () => {
  const isMobile = useMobileScreen();
  return (
    <>
      {isMobile ? (
        <p className="text-based">
          My approach to development revolves around{" "}
          <span className="text-purple-900">
            communication and collaboration.{" "}
          </span>
          I focus on understanding the goals of each project to create tailored
          solutions that align with and unite the vision of both the client and
          the end-users. I emphasize writing{" "}
          <span className="text-purple-900">clean reusable and scalable</span>
          code, ensuring that the the solutions solutions. I build are
        </p>
      ) : (
        <>
          <div className="flex flex-row">
            My approach to development revolves around
            <div className="ml-[1%] mr-[1%]">
              <TextFlip
                array={[
                  "collaboration. ",
                  "communication.",
                  "collaboration.",
                  "communication.",
                  "collaboration.",
                ]}
              />
            </div>
            I focus on
          </div>
          <div className="flex flex-col">
            understanding the goals of each project to create tailored solutions
            that align with and unite the vision of both the client and the
            end-users. I emphasize writing
            <div className=" flex flex-row absolute mt-[4%] left-[49%]">
              <TextFlip
                array={["clean", "simple", "reusable", "scalable", "clean"]}
              />
              <div className="ml-[3%]"></div>
            </div>
            code, ensuring that the the solutions solutions. I build are
            long-lasting and easy to update as needs evolve.
          </div>
        </>
      )}
    </>
  );
};
