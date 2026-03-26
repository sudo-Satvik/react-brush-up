import { useCallback, useState } from "react";

const Component = () => {
  const [range, setRange] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);

  const maxRange = range ?? 20;

  const handleIncrement = useCallback(() => {
    setCount((prev) => (prev < maxRange ? prev + 1 : prev));
  }, [maxRange]);

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-700/50 rounded-2xl bg-zinc-900/20 max-w-md w-full">
      <h3 className="text-8xl font-medium text-indigo-600 mb-8 font-mono">
        {count}
      </h3>
      <div className="flex gap-4">
        <button
          className="bg-linear-to-br from-purple-500 to-indigo-600 px-4 py-1 rounded font-mono transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handleIncrement}
          disabled={count === maxRange}
        >
          Increase
        </button>

        <button
          className="bg-linear-to-br from-purple-500 to-indigo-600 px-4 py-1 rounded font-mono transition-transform active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handleDecrement}
          disabled={count <= 0}
        >
          Decrease
        </button>
      </div>
      <input
        type="number"
        placeholder="Enter the Max Range (default: 20)"
        value={range ?? ""}
        onChange={(e) => {
          const val = e?.target?.value;
          if (val == "") setRange(null);
          else setRange(Number(val));
        }}
        className="font-mono border border-gray-700 px-3 py-0.5 my-4 rounded outline-none active:outline-none w-80"
      />
    </div>
  );
};

export default Component;
