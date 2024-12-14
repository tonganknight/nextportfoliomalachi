import { ContactItemsProps } from "../../types/ConnectSection/ConnectSectionTypes";
import { ContentItemMapper } from "./ContactItemMapper";
import Image from "next/image";

export const ContactItems = (ContactItemsProps: ContactItemsProps) => {
  const contentMaper = ContentItemMapper(ContactItemsProps);
  return (
    <div className="flex flex-col text-xl mt-[1rem]">
      {contentMaper.itemInfo.map((item, index) => (
        <div className="flex flex-row mt-[10px]" key={index}>
          <Image src={item.icon} alt={""} height={25} width={30} />
          <p className="ml-[10px]">{item.info}</p>
        </div>
      ))}
    </div>
  );
};
