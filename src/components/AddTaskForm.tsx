import { useState } from "react";
import { useTasksStore } from "../store/store";
import { PlusIcon } from "./Icons";
import { v4 as uuid } from "uuid";
import { Category, Priority } from "../interfaces/task.interface";

export function AddTaskForm() {
  const addTask = useTasksStore((state) => state.addTask);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("High");
  const [category, setCategory] = useState<Category>("Personal");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: uuid(),
      title,
      priority,
      category,
      createdAt: new Date(),
      completed: false,
    });

    // Reset y cerrar
    setTitle("");
    setPriority("High");
    setCategory("Personal");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 justify-center bg-gradient-to-br  from-purple-50 to-blue-50 p-4 rounded-lg shadow-lg">
        <h2 className="font-bold font-inter bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-2xl text-center">
          New Task
        </h2>

        <div className="space-y-2">
          <label className="text-sm font-medium">Task Name</label>
          <div className="relative">
          <input
            type="text"
            placeholder="What are you going to do?"
            className=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-sm">
                Priority
              </label>
              <select
                className="border p-2 rounded-md border-slate-300"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-sm">
                Category
              </label>
              <select
                className="border p-2 rounded-md border-slate-300"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                <option value="Personal">Personal</option>
                <option value="Health">Health</option>
                <option value="Finance">Finance</option>
                <option value="Projects">Projects</option>
                <option value="Work">Work</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 justify-center h-10 w-32 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer"
          >
            <PlusIcon />
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </form>
  );
}
