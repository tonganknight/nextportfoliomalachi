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
          "absolute  mt-[14rem] text-6xl Raleway-Regular z-10",
          isMobile ? "ml-[11%] mb-[36rem]" : "ml-[32%] mb-[46rem]"
        )}
      >
        <div className="flex flex-col ml-[22%] w-[100%] mt-[-7%]">
          <p className="Raleway-Regular font-semibold">Hello, I'm</p>
          <span className="  text-md font-bold text-purple-600 Raleway-Regular">
            MALACHI ALUSA
          </span>
          <span className="text-2xl mt-[10px] Raleway-Regular font-semibold">
            Full Stack Developer
          </span>
        </div>
        <div className="flex flex-row justify-around pt-[8%] ml-[22%] w-full">
          <Button variation="primary">CONTACT ME</Button>
          <Button isLink={true} variation="secondary">
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>
    </>
  );
};
