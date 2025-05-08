import { PlusIcon } from "./Icons";
import { Category, Priority } from "../interfaces/task.interface";
import { useTaskForm } from "../hooks/useTaskForm";
import { categoriesOptions, priorityOptions } from "../constants/options";
import { SelectField } from "./SelectField";
import clsx from "clsx";

export function TaskForm() {
  const {
    title,
    priority,
    category,
    errors,
    setTitle,
    setPriority,
    setCategory,
    handleSubmit,
  } = useTaskForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-5 justify-center p-4">
        <div className="space-y-2 flex flex-wrap items-center gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-indigo-100">Título</label>
            <input
              type="text"
              placeholder="¿Qué necesitas hacer?"
              className={clsx(
                "p-2 w-64 h-10 rounded-md text-indigo-100 border outline-none focus:ring-2 transition-all duration-200",
                {
                  "border-red-500 focus:ring-red-500/20": errors,
                  "border-slate-600 focus:ring-blue-500/20 focus:border-indigo-100":
                    !errors,
                }
              )}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-5">
            <SelectField
              id="priorityFilter"
              label="Prioridad"
              options={priorityOptions}
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
            />
            <SelectField
              id="categoryFilter"
              label="Categoría"
              options={categoriesOptions}
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
            />
          </div>

          <button
            type="submit"
            className="flex mt-4 items-center gap-2 justify-center h-9 w-40 bg-slate-700 hover:bg-gray-700/50 text-indigo-100 p-2 rounded-md cursor-pointer"
          >
            <PlusIcon />
            <span className="text-sm">Agregar Tarea</span>
          </button>
        </div>
      </div>
    </form>
  );
}
