import Component from "./components/Component";
import StopWatch from "./components/StopWatch";

function App() {
  const currentTopic = "UseRef";

  return (
    <div className="min-h-screen w-full flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-purple-500/30">
      {/* Top Navigation */}
      <header className="px-6 py-4 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-white"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          <h1 className="text-lg font-semibold tracking-wide text-zinc-200">
            React Practice Area
          </h1>
        </div>

        <div className="px-4 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/20 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Topic: {currentTopic}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 flex flex-col relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col relative z-0">
          <div className="rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm shadow-2xl flex-1 flex flex-col overflow-hidden">
            {/* Component Header */}
            <div className="p-8 border-b border-white/5 bg-zinc-900/80">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {currentTopic}
                <span className="text-purple-500">.</span>
              </h2>
              <p className="text-zinc-400 mt-2 text-sm max-w-2xl">
                Edit{" "}
                <code className="bg-black/30 px-1.5 py-0.5 rounded text-indigo-300 font-mono">
                  src/components/Component.tsx
                </code>{" "}
                to practice your components. Changes will instantly appear
                below.
              </p>
            </div>

            {/* Practice Component Render Area */}
            <div className="flex-1 p-8 bg-[#0a0a0a] flex flex-col items-center justify-center min-h-[400px]">
              {/* <Component /> */}
              <StopWatch />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
