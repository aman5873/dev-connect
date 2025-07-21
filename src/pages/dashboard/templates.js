import { useState } from "react";
import TemplateCard from "@/components/TemplateCard";

const templates = ["classic", "modern", "minimal"];

export default function TemplateSelection() {
  const [selected, setSelected] = useState("classic");

  const handleSave = () => {
    // TODO: Save to DB (firestore/mongo) for authenticated user
    alert(`Template "${selected}" saved!`);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Choose a Portfolio Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((tpl) => (
          <TemplateCard
            key={tpl}
            title={tpl.charAt(0).toUpperCase() + tpl.slice(1)}
            selected={tpl === selected}
            onSelect={() => setSelected(tpl)}
          />
        ))}
      </div>
      <button
        onClick={handleSave}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        Save Template
      </button>
    </div>
  );
}
