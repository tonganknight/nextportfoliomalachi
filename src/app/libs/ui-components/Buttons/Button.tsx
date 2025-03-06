import { ReactNode, useEffect, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variation?: "primary" | "secondary";
  isLink?: boolean;
}
export const Button = ({
  children,
  onClick,
  className = "",
  variation,
  isLink,
}: ButtonProps) => {
  const [stateClassName, setStateClassName] = useState("");

  useEffect(() => {
    const bg =
      variation === "primary"
        ? "bg-secondary-color text-white p4 text-center w-[220px] h-[30px] font-semibold rounded-lg"
        : " font-semibold bg-transparent text-secondary-color p4 text-center w-[220px] h-[30px] font-semibold rounded-lg border-2 border-secondary-color";
    setStateClassName(bg + " " + className);
  }, [className]);
  return (
    <button onClick={onClick} className="items-center">
      {isLink ? (
        <a
          className={`text-xs p-3  flex justify-center items-center ${stateClassName}`}
          href="/Images/Malachi Web Dev 2025.pdf"
          download="Resume Malachi Alusa PDF"
        >
          {children}
        </a>
      ) : (
        <p
          className={`text-xs p-3  flex justify-center items-center ${stateClassName}`}
        >
          {children}
        </p>
      )}
    </button>
  );
};
