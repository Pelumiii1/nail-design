import React from "react";

type Props = { shape: string; color: string; onReset: () => void };

export const Summary: React.FC<Props> = ({ shape, color, onReset }) => (
  <div className="p-4 text-center">
    <h2 className="text-xl font-semibold">Your Design</h2>
    <p className="mt-2">
      Shape: <strong>{shape}</strong>
    </p>
    <p>
      Color: <strong style={{ color }}>{color}</strong>
    </p>
    <button
      className="mt-4 px-6 py-2 bg-pink-400 text-white rounded-full shadow"
      onClick={onReset}
    >
      Start Over
    </button>
  </div>
);
