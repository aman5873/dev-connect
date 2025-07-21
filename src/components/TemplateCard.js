export default function TemplateCard({ title, selected, onSelect }) {
  return (
    <div
      className={`border rounded-xl p-4 cursor-pointer hover:shadow-md transition ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={onSelect}
    >
      <div className="text-lg font-bold mb-2">{title}</div>
      <div className="h-32 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500">[Template Preview]</span>
      </div>
    </div>
  );
}
