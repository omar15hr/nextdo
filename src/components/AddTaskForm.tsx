import { useState } from "react";
import { useTasksStore } from "../store/store";
import { CloseIcon, PlusIcon } from "./Icons";
import { v4 as uuid } from "uuid";
import { Category, Priority } from "../interfaces/task.interface";

interface Props {
  onClose: () => void;
}

export function AddTaskForm({ onClose }: Props) {
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
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center bg-white p-4 rounded-lg shadow-lg w-xl">
        <div className="flex justify-between items-center">
          <h2 className="font-bold font-inter">Add new task</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Task title..."
            className="p-2 bg-slate-100 rounded-md w-full focus:border-1 focus:outline-sky-500 focus:outline focus:border-sky-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

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
            className="flex items-center justify-center h-10 w-32 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer"
          >
            <PlusIcon />
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </form>
  );
}
