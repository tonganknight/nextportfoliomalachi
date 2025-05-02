export const CardTags = (props: { tags: string[] }) => {
  return (
    <div className="flex flex-row mx-8">
      {props.tags.map((tag, index) => {
        return (
          <div
            key={index}
            className="bg-gradient-to-b from-secondary-color to-primary-color text-white text-sm font-semibold px-2 py-1 rounded-full mr-2"
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};
