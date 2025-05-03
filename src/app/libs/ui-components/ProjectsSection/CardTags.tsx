export const CardTags = (props: { tags: string[]; isMobile: boolean }) => {
  return (
    <div className={`flex flex-wrap mx-8`}>
      {props.tags.map((tag, index) => (
        <div
          key={index}
          className={`bg-gradient-to-b from-secondary-color to-primary-color text-white text-sm font-semibold px-2 py-1 rounded-full m-1 ${
            props.isMobile && "w-auto"
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
