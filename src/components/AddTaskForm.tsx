import { PlusIcon } from "./Icons";

interface Props {
  onClose: () => void;
}

export function AddTaskForm({ onClose }: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 justify-center bg-white p-4 rounded-lg shadow-lg w-xl">
        <div className="flex justify-between items-center">
          <h2 className="font-bold font-inter">Add new task</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Task title..."
            className="p-2 bg-slate-100 rounded-md w-full focus:border-1 focus:outline-sky-500 focus:outline focus:border-sky-500"
          />

          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-sm">
                Priority
              </label>
              <select className="border p-2 rounded-md border-slate-300">
                <option value="" className="">
                  High
                </option>
                <option value="">Medium</option>
                <option value="">Low</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-sm">
                Category
              </label>
              <select className="border p-2 rounded-md border-slate-300">
                <option value="">Personal</option>
                <option value="">Work</option>
                <option value="">Urgent</option>
                <option value="">Projects</option>
              </select>
            </div>
          </div>

          <button className="flex items-center justify-center h-10 w-32 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer">
            <PlusIcon />
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </div>
  );
}
