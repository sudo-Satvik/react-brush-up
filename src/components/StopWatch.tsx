import React, { useEffect, useRef, useState } from "react";

const StopWatch: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => setTimer((prev) => prev + 10), 10);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    handleStop();
    setTimer(0);
  };

  const minutes = Math.floor(timer / 60000);
  const seconds = Math.floor((timer % 60000) / 1000);
  const milliseconds = Math.floor((timer % 1000) / 10);
  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col gap-4 items-center">
      <span className="text-6xl font-mono">
        {format(minutes)}:{format(seconds)}:{format(milliseconds)}
      </span>
      <div className="flex gap-4">
        <button className="bg-zinc-500 px-4 py-1 rounded" onClick={handleStart}>
          Start
        </button>
        <button className="bg-zinc-500 px-4 py-1 rounded" onClick={handleStop}>
          Stop
        </button>
        <button className="bg-zinc-500 px-4 py-1 rounded" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
