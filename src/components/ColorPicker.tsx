import React from "react";

type Props = {
  selected: string;
  options: string[];
  onSelect: (color: string) => void;
};

export const ColorPicker: React.FC<Props> = ({
  selected,
  options,
  onSelect,
}) => (
  <div className="flex space-x-3 p-4 overflow-x-auto">
    {options.map((color) => (
      <div
        key={color}
        onClick={() => onSelect(color)}
        className={`h-8 w-8 rounded-full shadow-inner cursor-pointer border-2 ${
          selected === color ? "border-pink-500" : "border-transparent"
        }`}
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);
