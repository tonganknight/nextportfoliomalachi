"use client";
import { useState } from "react";
import { ShowContent } from "../Helpers";
import { PDFViewer } from "./PDFViewer";
import { ResumeDescription } from "./ResumeDescription";
import { ResumeDownload } from "./ResumeDownload";
import { ResumeTitle } from "./ResumeTitle";
import { Button } from "../Buttons";

interface ResumeSectionProps {
  url: string;
  title: string;
  downloadText: string;
  description: string;
}
export const ResumeSection = ({ data }: { data: ResumeSectionProps }) => {
  const [showContent, setShowContent] = useState(false);
  const updateState = () => setShowContent((prev: boolean) => !prev);
  return (
    <div id="Resume" className="flex flex-col items-center mt-[150%]">
      <ResumeTitle title={data.title} />

      <ResumeDescription description={data.description} />
      <Button onClick={updateState}>
        {showContent ? "Hide Resume" : "Show Resume"}
      </Button>
      <ShowContent state={showContent}>
        <PDFViewer url={data.url} />
      </ShowContent>
      <ResumeDownload downloadText={data.downloadText} />
    </div>
  );
};
