import CodeBlock from "./CodeBlock";
import ListBlock from "./ListBlock";
import TextBlock from "./TextBlock";

export default function SectionRenderer({ section }) {
  const { heading, description, type, content, language } = section;

  return (
    <div className="flex flex-col gap-2">
      {type === "code" && (
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">{heading}</h2>
          <p className="text-sm text-zinc-300">{description}</p>
          <CodeBlock code={content} language={language} />
        </div>
      )}

      {type === "list" && <ListBlock items={content} />}

      {type === "text" && <TextBlock text={content} />}
    </div>
  );
}
