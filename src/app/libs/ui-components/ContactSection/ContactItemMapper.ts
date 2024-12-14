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
        },
        {
          info: ContactItemsProps.github,
          icon: ContactItemsProps.githubIconSrc,
        },
        {
          info: ContactItemsProps.linkedIn,
          icon: ContactItemsProps.linkedInIconSrc,
        },
      ];
    
      return { itemInfo }
}