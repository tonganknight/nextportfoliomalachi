"use client";
import { ContactItemsProps } from "../../types/ConnectSection/ConnectSectionTypes";
import { ContentItemMapper } from "./ContactItemMapper";
import Image from "next/image";
import useMobileScreen from "../../helpers/useMobileScreen";
import { cn } from "../../utils";

export const ContactItems = (ContactItemsProps: ContactItemsProps) => {
  const contentMaper = ContentItemMapper(ContactItemsProps);
  const isMoble = useMobileScreen();
  return (
    <div className="flex flex-col text-xl mt-[1rem]">
      {contentMaper.itemInfo.map((item, index) => (
        <div className="flex flex-row mt-[10px]" key={index}>
          <Image src={item.icon} alt={""} height={35} width={30} />
          <p className={cn("ml-[10px]", isMoble ? "text-xs" : "text-based")}>
            {item.info}
          </p>
        </div>
      ))}
    </div>
  );
};
