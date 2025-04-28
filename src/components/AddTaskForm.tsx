export function AddTaskForm() {
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-md shadow">
      <h2 className="text-lg font-bold font-inter">Add new task</h2>

      <div className="flex gap-5 justify-between items-center">
        <input
          type="text"
          placeholder="Task title..."
          className="p-2 bg-slate-100 rounded-md w-full focus:border-1 focus:outline-sky-500 focus:outline focus:border-sky-500"
        />

        <button className="h-10 w-32 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer">
          Add Task
        </button>
      </div>
      <div className="flex justify-between items-center gap-5">
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
    </div>
  );
}
