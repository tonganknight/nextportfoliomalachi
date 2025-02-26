import Image from "next/image";
interface FooterSectionProps {
  imageSrc: string;
  imageAlt: string;
  faceBookSrc: string;
  faceBookHref: string;
  gitSrc: string;
  gitHref: string;
}

export const FooterSection = () => {
  return (
    <div className="flex flex-col w-full text-center bg-primary-color">
      <div className="bg-secondary-color h-[30px]"></div>
      <div className="flex h-[90%] justify-center bg-primary-color">
        <Image
          className="mt-[8%] bg-transparent-0"
          src="/Images/placeholder logo.png"
          alt={""}
          height={400}
          width={400}
        />
      </div>
      <p className="mt-[2%]">
        Copyright 2025 Alusa Solutions All Rights Reserved
      </p>
    </div>
  );
};
