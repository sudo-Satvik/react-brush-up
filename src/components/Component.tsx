import { useState } from "react";

type TodoState = {
  id: number;
  taskName: string;
  isCompleted: boolean;
};

const Component = () => {
  const [todoObj, setTodoObj] = useState<TodoState[]>([]);
  const [title, setTitle] = useState<string>("");

  const handleTodoAdd = () => {
    if (!title.trim()) return;
    setTodoObj((prev) => [
      ...prev,
      {
        id: Date.now(),
        taskName: title,
        isCompleted: false,
      },
    ]);

    setTitle("");
  };

  const handleToggle = (id: number) => {
    setTodoObj((prev) =>
      prev.map((item: TodoState) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodoObj((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex items-center justify-center bg-zinc-950 text-zinc-200 w-200">
      <div className="w-full max-w-md p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
        {/* Header */}
        <h1 className="text-xl font-semibold mb-4">Todo</h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-sm outline-none focus:ring-1 focus:ring-zinc-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleTodoAdd();
            }}
          />
          <button
            className="px-3 py-2 bg-zinc-200 text-zinc-900 rounded-lg text-sm font-medium cursor-pointer transition-all active:scale-95"
            onClick={handleTodoAdd}
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          {todoObj.length > 0 &&
            todoObj.map((item) => (
              <li
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700"
                key={item.id}
              >
                <input
                  type="checkbox"
                  name="completion"
                  checked={item.isCompleted}
                  onChange={() => handleToggle(item.id)}
                />
                <span
                  className={`text-sm capitalize ${item.isCompleted ? "line-through" : ""}`}
                >
                  {item.taskName}
                </span>
                <button
                  className={`text-xs transition-all ease-in-out ${item.isCompleted ? "opacity-100" : "opacity-0"}`}
                  onClick={() => handleDelete(item.id)}
                >
                  🗑️
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Component;
