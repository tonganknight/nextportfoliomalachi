import TypingText from "@/app/components/animate/text/typing-text";
import Image from "next/image";
interface TailWindSectionProps {
  title: string;
  description: string;
}
export const TailWindSection = (props: TailWindSectionProps) => {
  return (
    <div className=" flex flex-row justify-center mt-[10%]">
      <div className="flex flex-col w-[30%] mr-[10%]">
        <p className="text-md Raleway-Regular p-[10px] mb-[20px] self-start ">
          {props.title}
        </p>
        <TypingText waitTime={5000} delay={16} text={`${props.description}`} />
        <a
          href="https://tailwindcss.com/"
          className="text-md Raleway-Regular mt-[20px]"
        >
          <span className="text-secondary-color">Learn More</span>
        </a>
      </div>
      <div className=" bg-background-primary-color p-[2%]">
        <Image
          src="https://cdn.iconfinder.com/stored_data/2061378/128/png?token=1736271359-lhdojrHgB5lnUacPlzcpDPqJ9y%2B9QSXGVHqZ0J%2FYbm8%3D"
          width={200}
          height={200}
          alt="Tailwind CSS Logo"
        />
      </div>
    </div>
  );
};
