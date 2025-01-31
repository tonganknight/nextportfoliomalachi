"use client";
import { Russo_One } from "next/font/google";
import { ContectSection } from "../../ContactSection";
import { cn } from "../../../utils";
import useMobileScreen from "../../../helpers/useMobileScreen";
const russo_One = Russo_One({ weight: "400", subsets: ["latin"] });
export const HeroTitle = () => {
  const isMobile = useMobileScreen();
  return (
    <>
      <div
        className={cn(
          "absolute  mt-[14rem] text-6xl font-RussoOne-Regular z-10",
          isMobile ? "ml-[11%] mb-[36rem]" : "ml-[32%] mb-[46rem]"
        )}
      >
        <div className="flex flex-col">
          <p>Hello, I'm</p>
          <span className="text-purple-600">Malachi Alusa</span>
          <span className="text-2xl mt-[10px]">Full Stack Developer</span>
        </div>
        <ContectSection />
      </div>
    </>
  );
};
