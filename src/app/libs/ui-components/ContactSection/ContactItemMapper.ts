import { ContactItemsProps } from "../../types/ConnectSection/ConnectSectionTypes"
export const ContentItemMapper = (ContactItemsProps:ContactItemsProps ) => {

    const itemInfo = [
        {
          info: ContactItemsProps.phoneNumber,
          icon: ContactItemsProps.phoneIconSrc
        },
        {
          info: ContactItemsProps.email,
          icon: ContactItemsProps.emailIconSrc
        }
      ];
    
      return { itemInfo }
}