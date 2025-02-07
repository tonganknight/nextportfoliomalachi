import { ReactNode } from "react";

interface ShowContentProps {
  children: ReactNode;
  state: boolean;
}

export const ShowContent = ({ children, state }: ShowContentProps) => {
  return <div className={state ? "block" : "hidden"}>{children}</div>;
};
