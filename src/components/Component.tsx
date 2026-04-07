import { useEffect, useRef, useState } from "react";

const Component = () => {
  const [count, setCount] = useState<number>(0);
  const prevRef = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    prevRef.current = count;
  }, [count]);

  const focusInput = () => inputRef.current?.focus();

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-700/50 rounded-2xl bg-zinc-900/20 max-w-md w-full">
      <input
        ref={inputRef}
        type="text"
        className="bg-zinc-900 px-3 border border-zinc-500 rounded"
      />
      <button
        className="bg-zinc-600 px-3 py-1 rounded mt-4"
        onClick={focusInput}
      >
        Click to focus on input field
      </button>

      <hr />

      <div className="flex flex-col mt-8">
        <p>Current: {count}</p>
        <p>Previous: {prevRef.current}</p>

        <button
          className="bg-zinc-600 px-3 py-1 rounded mt-4"
          onClick={() => setCount((prev) => prev + 1)}
        >
          ➕
        </button>
      </div>
    </div>
  );
};

export default Component;
