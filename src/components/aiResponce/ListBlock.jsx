export default function ListBlock({ items }) {
  // Convert string → array (fallback)
  if (typeof items === "string") {
    items = items.split(",").map(i => i.trim());
  }

  // Prevent crash
  if (!Array.isArray(items)) {
    return <p className="text-red-500">Invalid list data</p>;
  }

  return (
    <ul className="list-disc pl-5 text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}