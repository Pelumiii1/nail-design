import React from "react";
import { Loader } from "./Loader";
import { HandRaisedIcon } from "@heroicons/react/24/solid";

type Props = {
  shape: string;
  color: string;
  loading: boolean;
  step: "select" | "summary";
};

export const PreviewHand: React.FC<Props> = ({
  shape,
  color,
  loading,
  step,
}) => {
  if (loading) return <Loader />;

  const shapeClip: Record<Props["shape"], string> = {
    Square: "inset(0 0 0 0 round 4px)",
    Almond: "ellipse(50% 75% at 50% 50%)",
    Stiletto: "polygon(50% 0%, 0% 100%, 100% 100%)",
  };

  const nailPositions = [
    { top: "10%", left: "9%" }, // Pinky
    { top: "-6%", left: "40%" }, // Middle
    { top: "1%", left: "25%" }, // Ring
    { top: "-5%", left: "57%" }, // Index
    { top: "30%", left: "74%" }, // Thumb
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-24 h-24">
        {/* Hand Icon  */}
        <HandRaisedIcon
          className="w-full h-full"
          fill="#8D5524"
          aria-label="Hand preview"
        />
        {/* One overlay per nail */}
        {nailPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: pos.top,
              left: pos.left,
              width: "16%",
              height: "20%",
              backgroundColor: color,
              clipPath: shapeClip[shape],
            }}
          />
        ))}
      </div>

      {step === "select" && (
        <p className="mt-2 text-gray-600">
          {shape} nails in <span style={{ color }}>{color}</span>
        </p>
      )}
    </div>
  );
};
