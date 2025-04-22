import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { NailShapeSelector } from "./components/NailShapeSelector";
import { ColorPicker } from "./components/ColorPicker";
import { PreviewHand } from "./components/PreviewHand";
import { Summary } from "./components/Summary";

const colors = ["#f8cdda", "#fcd1d1", "#ffc1e3", "#eaafc8"];

const App: React.FC = () => {
  const [shape, setShape] = useLocalStorage<string>("nailShape", "Almond");
  const [color, setColor] = useLocalStorage<string>("nailColor", colors[0]);
  const [step, setStep] = useState<"select" | "summary">("select");
  const [loading, setLoading] = useState(false);

  // simulate preview update
  useEffect(() => {
    if (step === "select") {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shape, color, step]);

  const handleNext = () => setStep("summary");
  const handleReset = () => {
    setStep("select");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-4 space-y-4">
      {step === "select" ? (
        <>
          <NailShapeSelector selected={shape} onSelect={setShape} />
          <ColorPicker selected={color} options={colors} onSelect={setColor} />
          <PreviewHand
            shape={shape}
            color={color}
            loading={loading}
            step={step}
          />
          <button
            className="w-full py-2 bg-pink-500 text-white rounded-lg shadow"
            onClick={handleNext}
          >
            See Summary
          </button>
        </>
      ) : (
        <>
          <PreviewHand
            shape={shape}
            color={color}
            loading={loading}
            step={step}
          />
          <Summary shape={shape} color={color} onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default App;
