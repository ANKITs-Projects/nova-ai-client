export default function CodeBlock({ code }) {
  return (
    <pre className="bg-black text-white p-3 rounded-lg overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  );
}