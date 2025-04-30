import { PlusIcon } from "./Icons";
import { Category, Priority } from "../interfaces/task.interface";
import { useTaskForm } from "../hooks/useTaskForm";
import { categoriesOptions, priorityOptions } from "../constants/options";

export function AddTaskForm() {
  const {
    title,
    priority,
    category,
    setTitle,
    setPriority,
    setCategory,
    handleSubmit,
  } = useTaskForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 justify-center bg-white p-4 rounded-lg shadow-lg">
        <h2 className="font-bold font-inter text-xl text-center text-blue-500">
          Nueva Tarea
        </h2>

        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-sm font-medium">Título</label>
          <div className="relative">
            <input
              type="text"
              placeholder="¿Qué necesitas hacer?"
              className="p-2 border w-full rounded-md border-gray-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm">Prioridad</label>
              <select
                id="priority"
                className="border p-2 rounded-md border-slate-300"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
              >
                {priorityOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm">Categoría</label>
              <select
                className="border p-2 rounded-md border-slate-300"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                {categoriesOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 justify-center h-10 w-42 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer"
          >
            <PlusIcon />
            <span className="text-sm">Agregar Tarea</span>
          </button>
        </div>
      </div>
    </form>
  );
}
