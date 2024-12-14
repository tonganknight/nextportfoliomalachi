import { ContactItems } from "./ContactItems";

export const ContectSection = () => {
  return (
    <>
      <div className="text-2xl flex mt-[1rem]">
        <div>Contact</div>
      </div>
      <ContactItems
        phoneIconSrc={
          "https://cdn.iconfinder.com/stored_data/2032643/128/png?token=1734150283-GoFNcSlhJzYL9uGiYbYp%2F66vSwY5WhezLBWOnXgJUj4%3D"
        }
        phoneNumber={"435-772-5277"}
        emailIconSrc={
          "https://cdn.iconfinder.com/stored_data/2032650/128/png?token=1734150328-4OFTaWrdDbOHO%2FNpft%2BJBECeaDWE3se0EV0pjduzSaY%3D"
        }
        email={"malachialusa@gmail.com"}
        linkedInIconSrc={
          "https://cdn.iconfinder.com/stored_data/2032651/128/png?token=1734150368-ULNuuQgd1xH7B3khzmNrUSSg8pvV8H60wKt60qRBujc%3D"
        }
        linkedIn={"https://www.linkedin.com/in/malachi-alusa-a96439174/"}
        githubIconSrc={
          "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_six_color-1024.png"
        }
        github={"https://github.com/tonganknight"}
      />
    </>
  );
};
