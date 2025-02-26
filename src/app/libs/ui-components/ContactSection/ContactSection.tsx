import { ContactItems } from "./ContactItems";
import Image from "next/image";
export const ContactSection = () => {
  return (
    <div className="text-2xl flex mt-[190%] Railway-Regular flex-col items-center bg-background-secondary-color py-[2%] mt-[210%]">
      <div className="flex flex-row">
        <Image
          src="/Images/PlacehlderTransparent.png"
          alt={""}
          height={500}
          width={350}
        />
        <div className="flex flex-col">
          <div className="Raleway-Regular text-3xl font-semibold">
            CONTACT ME
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
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

              <div className="flex flex-row items-center justify-center mt-[5%]">
                <a className="mr-[5%]" href="https://github.com/tonganknight">
                  <Image
                    src="https://cdn.iconfinder.com/stored_data/2033260/128/png?token=1734197252-PXZubYcV%2BBCEt8gv99nb2dVjSluerugEgHo5QhQl6K0%3D"
                    alt={"Git Hub Logo"}
                    height={35}
                    width={30}
                  />
                </a>
                <a href="https://www.linkedin.com/in/malachi-alusa-a96439174/">
                  <Image
                    src="https://cdn.iconfinder.com/stored_data/2033257/128/png?token=1734196838-V3F95U87KitnZhmJFmHMUUsFdAaeQAfetzqlG4fcqfA%3D"
                    alt={"linkedIn Logo"}
                    height={35}
                    width={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
