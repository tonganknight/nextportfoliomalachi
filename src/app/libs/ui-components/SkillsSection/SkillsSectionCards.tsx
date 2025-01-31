import FlipCard from "@/app/components/animate/card/flip-card";

export const ProficienciesSectionCards = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pt-5">
        <FlipCard
          description="TypeScript is the launguage I am most familiar with. Its the main lanugage I use for Web Development. I have 4+ years of experience with it."
          image="https://cdn.iconfinder.com/stored_data/2071555/128/png?token=1736802882-YI6872gFI7hjurbDTT%2BkKfu3hB%2FbYpIL1Q9yaq2Mp50%3D"
          rotate="y"
          subtitle="Software Engineer"
          title="TypeScript"
        />
        <FlipCard
          description="I have a lot of expierence using JavaScript for both front and back end development. It was the original language I learnedd for development"
          image="https://cdn.iconfinder.com/stored_data/2071566/128/png?token=1736803853-i3jwNepCW656l%2FtHFqkT8ygw1zAMiOQWozTw7PssMsU%3D"
          rotate="y"
          subtitle="Software Engineer"
          title="JavaScript"
        />
        <FlipCard
          description="I can program with C#. It's a more recent tool I have aquired. I worked solving Jr developer tasks with it."
          image="https://cdn.iconfinder.com/stored_data/2071574/128/png?token=1736804055-o3p2XSOdRVv6C8sPXpCupSNPkKwbrn85GHV4PnkaPXE%3D"
          rotate="y"
          subtitle="Software Engineer"
          title="C Sharp"
        />
        <FlipCard
          description="My work as a QA engineer has given me expierence with Microsoft SQL. While its not something I have recently been using, I can query a table, and find what I looking for."
          image="https://cdn.iconfinder.com/stored_data/2071580/128/png?token=1736804393-bOBijIJkbyyRd98rXSjLDE3Uxfd35HaDcv5aVxumZcg%3D"
          rotate="y"
          subtitle="Software Engineer"
          title="Microsoft SQL"
        />
      </div>
      <div className="flex flex-row pt-5">
        <FlipCard
          description=" I have expierence implementinig Google Pay. I've built integrations in professional sites using G pay as a means for checkout"
          image="https://cdn.iconfinder.com/stored_data/2072748/128/png?token=1736871663-2uYKnV8%2B21wKHpacgSyvo%2BjSU8i9Z3c8rsRdiIdVkUE%3D"
          rotate="y"
          subtitle="Software Engineer"
          title="Google Pay"
        />
        <FlipCard
          description="Durring my schooling I've built multiple projects using node.js that utilize graph QL. Its a strong tool I'm happy to jump back into."
          image="https://cdn.iconfinder.com/stored_data/2072750/128/png?token=1736871824-oqrFAjat%2F2rVZi5MrHy8Zo1vi%2BKgTTHuC%2BaY386Dp5w%3D"
          rotate="y"
          subtitle="Software Engineer"
          title="Graph QL"
        />
      </div>
    </div>
  );
};
