import { Russo_One } from "next/font/google";
import { ContectSection } from "../../ContactSection";
// import MaskText from "../../../../components/anamata/text/mastk-text";
const russo_One = Russo_One({ weight: "400", subsets: ["latin"] });
export const HeroTitle = () => {
  return (
    <>
      <div className="absolute mb-[46rem] mt-[14rem] ml-[32%] text-6xl font-RussoOne-Regular">
        <div className="flex flex-col">
          <p>Hello, I'm</p>
          <span className="text-purple-900">Malachi Alusa</span>
          <span className="text-2xl mt-[10px]">Full Stack Developer</span>
        </div>
        <ContectSection />
      </div>
    </>
  );
};
