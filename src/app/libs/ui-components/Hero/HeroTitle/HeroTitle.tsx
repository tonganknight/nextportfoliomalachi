"use client";
import { Russo_One } from "next/font/google";
import { cn } from "../../../utils";
import useMobileScreen from "../../../helpers/useMobileScreen";
import { Button } from "../../Buttons/Button";

const russo_One = Russo_One({ weight: "400", subsets: ["latin"] });
export const HeroTitle = () => {
  const isMobile = useMobileScreen();
  return (
    <>
      <div
        className={cn(
          " text-6xl Raleway-Regular z-10",
          isMobile
            ? "ml-[11%] mb-[36rem] mt-[32%] mr-[41%]"
            : "ml-[32%] mb-[46rem] mt-[25%]"
        )}
      >
        <div
          className={cn(
            "flex flex-col ml-[20%] w-[100%] ",
            isMobile ? "text-center mt-[90%]" : "mt-[-7%]"
          )}
        >
          <p className="Raleway-Regular font-semibold">{"Hello, I'm"}</p>
          <span className="  text-md font-bold text-purple-600 Raleway-Regular">
            MALACHI ALUSA
          </span>
          <span className="text-2xl mt-[10px] Raleway-Regular font-semibold">
            Full Stack Developer
          </span>
        </div>
        <div
          className={cn(
            "flex justify-around pt-[8%]",
            isMobile ? "flex-col ml-[30%]" : "flex-row w-full ml-[17%]"
          )}
        >
          <Button className={isMobile ? "mb-[4%]" : ""} variation="primary">
            CONTACT ME
          </Button>
          <Button isLink={true} variation="secondary">
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>
    </>
  );
};
