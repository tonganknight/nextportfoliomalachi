import Image from "next/image";
export const NavigationLogo = () => {
  return (
    <Image
      className="ml-[7%]"
      src="/Images/Logo Horizontal.png"
      alt={"My Custom Logo"}
      height={125}
      width={150}
    />
  );
};
