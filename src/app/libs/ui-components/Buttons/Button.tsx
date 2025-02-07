import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}
export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "w-[300px] h-[50px] font-RussoOne-Regular text-center mb-4 text-xl bg-gradient-to-r from-purple-900 to-purple-600 rounded-xl hover:bg-gradient-to-r hover:from-purple-900 hover:to-purple-900 rounded-xl"
      }
    >
      {children}
    </button>
  );
};
