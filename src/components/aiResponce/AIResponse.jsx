import Markdown from "react-markdown";
import { parse } from "../../utils/parse";
import SectionRenderer from "./SectionRenderer";

export default function AIResponse({ data }) {
  if (!data) return null;

  let parsedData = parse(data)

  if(parsedData == null){
    return <Markdown>{data}</Markdown>
  }
  
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{parsedData.title}</h1>

      {parsedData.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </div>
  );
}