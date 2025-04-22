import React from "react";

type Props = {
  selected: string;
  onSelect: (shape: string) => void;
};

const shapes = ["Almond", "Stiletto", "Square"];

export const NailShapeSelector: React.FC<Props> = ({ selected, onSelect }) => (
  <div className="flex space-x-4 p-4 overflow-x-auto">
    {shapes.map((shape) => (
      <button
        key={shape}
        className={`px-4 py-2 rounded-lg shadow ${
          selected === shape ? "bg-pink-400 text-white" : "bg-white"
        }`}
        onClick={() => onSelect(shape)}
      >
        {shape}
      </button>
    ))}
  </div>
);
