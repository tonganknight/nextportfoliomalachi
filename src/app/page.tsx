import { Main } from "./main";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  return (
    <>
      <Analytics />
      <Main />
    </>
  );
}
