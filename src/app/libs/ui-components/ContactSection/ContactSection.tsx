import { ContactItems } from "./ContactItems";

export const ContectSection = () => {
  return (
    <>
      <div className="text-2xl flex mt-[1rem]">
        <div>Contact</div>
      </div>
      <ContactItems
        phoneIconSrc={
          "https://cdn.iconfinder.com/stored_data/2033254/128/png?token=1734196675-hE6eiMJenAbV15VW4FgFA3kUjDXRyl6OyEPVYlm%2BWKg%3D"
        }
        phoneNumber={"435-772-5277"}
        emailIconSrc={
          "https://cdn.iconfinder.com/stored_data/2033256/128/png?token=1734196773-96xEqH3xiKb3%2B2c3KvKXZyKo2rf9E2FPrwaNCbdPIKI%3D"
        }
        email={"malachialusa@gmail.com"}
        linkedInIconSrc={
          "https://cdn.iconfinder.com/stored_data/2033257/128/png?token=1734196838-V3F95U87KitnZhmJFmHMUUsFdAaeQAfetzqlG4fcqfA%3D"
        }
        linkedIn={"https://www.linkedin.com/in/malachi-alusa-a96439174/"}
        githubIconSrc={
          "https://cdn.iconfinder.com/stored_data/2033260/128/png?token=1734197252-PXZubYcV%2BBCEt8gv99nb2dVjSluerugEgHo5QhQl6K0%3D"
        }
        github={"https://github.com/tonganknight"}
      />
    </>
  );
};
