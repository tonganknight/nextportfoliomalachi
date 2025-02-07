export const ResumeDownload = ({ downloadText }: { downloadText: string }) => {
  return (
    <div className="text-xl font-RussoOne-Regular mt-[10px] mb-[10px] ">
      <a
        href="/Images/ResumePlaceHolder.pdf"
        download="Resume Malachi Alusa PDF"
      >
        {downloadText}
      </a>
    </div>
  );
};
