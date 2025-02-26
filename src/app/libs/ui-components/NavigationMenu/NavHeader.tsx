export const NavHeader = () => {
  return (
    <div className="flex flex-row justify-end bg-primary-color h-[37px]">
      <p className=" text-xs pr-6 text-center Raleway-Regular font-semibold pt-[12px] font-semibold">
        CONTACT ME
      </p>
      <a
        className="mr-[98px] bg-black border-opacity-50"
        href="/Images/ResumePlaceHolder.pdf"
        download="Resume Malachi Alusa PDF"
      >
        <p className="text-xs text-center Raleway-Regular font-semibold pt-[12px] mr-12 bg-black pl-12 font-semibold">
          DOWNLOAD RESUME
        </p>
      </a>
    </div>
  );
};
