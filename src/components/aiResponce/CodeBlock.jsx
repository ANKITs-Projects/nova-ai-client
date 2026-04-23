export default function CodeBlock({ code, language }) {
  return (
    <div className="w-full flex flex-col gap-1">
      <h3 className="text-lg font-black">{language}</h3>
      <pre className="bg-black text-white p-3 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
