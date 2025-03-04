"use client";
import useMobileScreen from "../../helpers/useMobileScreen";
import { cn } from "../../utils";
import { ShowContent } from "../Helpers";
import { ContactItems } from "./ContactItems";
import Image from "next/image";
export const ContactSection = () => {
  const isMobile = useMobileScreen();
  return (
    <div
      className={cn(
        "text-2xl flex Railway-Regular flex-col items-center bg-background-secondary-color py-[2%] mt-[210%]",
        isMobile ? "mt-[550%] mb-[1px] " : "mt-[200%] "
      )}
    >
      <div className={cn("flex", isMobile ? "flex-col" : "flex-row")}>
        <ShowContent state={!isMobile}>
          <Image
            src="/Images/Footer Transparent Resized.png"
            alt={""}
            height={500}
            width={350}
          />
        </ShowContent>
        <div className="flex flex-col">
          <div className="Raleway-Regular text-3xl font-semibold">
            CONTACT ME
          </div>
          <div className="flex flex-row">
            <ContactItems
              phoneIconSrc={
                "https://cdn.iconfinder.com/stored_data/2033254/128/png?token=1734196675-hE6eiMJenAbV15VW4FgFA3kUjDXRyl6OyEPVYlm%2BWKg%3D"
              }
              phoneNumber={"435-772-5277"}
              emailIconSrc={
                "https://cdn.iconfinder.com/stored_data/2033256/128/png?token=1734196773-96xEqH3xiKb3%2B2c3KvKXZyKo2rf9E2FPrwaNCbdPIKI%3D"
              }
              email={"malachialusa@gmail.com"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
