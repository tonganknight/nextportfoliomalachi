import TypingText from "@/app/components/animate/text/typing-text";
import Image from "next/image";
interface TailWindSectionProps {
  title: string;
  description: string;
}
export const TailWindSection = (props: TailWindSectionProps) => {
  return (
    <div className="flex flex-row mt-[25px]">
      <div className="flex flex-col items-center w-[50%]">
        <p className="text-4xl font-RussoOne-Regular p-[10px] mb-[10px]">
          {props.title}
        </p>
        <Image
          src="https://cdn.iconfinder.com/stored_data/2061378/128/png?token=1736271359-lhdojrHgB5lnUacPlzcpDPqJ9y%2B9QSXGVHqZ0J%2FYbm8%3D"
          width={200}
          height={200}
          alt="Tailwind CSS Logo"
        />
      </div>
      <div className=" ml-5 mr-[212px] mt-[90px] font-RussoOne-Regular text-2xl w-[50%] items-center">
        <TypingText waitTime={4000} text={`${props.description}`} />
      </div>
    </div>
  );
};
