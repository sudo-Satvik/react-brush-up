import { useState } from "react";
import Test from "./Test";

const Component = () => {
  const [isRenderTest, setIsRenderTest] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-700/50 rounded-2xl bg-zinc-900/20 max-w-md w-full">
      <button
        className="bg-zinc-700 px-4 py-2 rounded transition-all active:scale-98 cursor-pointer hover:bg-zinc-800"
        onClick={() => setIsRenderTest((prev) => !prev)}
      >
        Click to {!isRenderTest ? "Mount" : "Unmount"}
      </button>
      {isRenderTest && <Test />}
    </div>
  );
};

export default Component;
