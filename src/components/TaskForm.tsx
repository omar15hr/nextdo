import { PlusIcon } from "./Icons";
import { Category, Priority } from "../interfaces/task.interface";
import { useTaskForm } from "../hooks/useTaskForm";
import { categoriesOptions, priorityOptions } from "../constants/options";
import { SelectField } from "./SelectField";
import clsx from "clsx";

export function AddTaskForm() {
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
              className={clsx(
                "p-2 w-full rounded-md border outline-none focus:ring-2 transition-all duration-200", 
                {
                  "border-red-500 focus:ring-red-500/20": errors,
                  "border-gray-300 focus:ring-blue-500/20 focus:border-blue-500": !errors
                }
              )}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors && (
              <p className="text-red-500 text-sm mt-1">{errors}</p>
            )}
            </div>

          <div className="flex gap-5">
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
            className="flex items-center gap-2 justify-center h-10 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer"
          >
            <PlusIcon />
            <span className="text-sm">Agregar Tarea</span>
          </button>
        </div>
      </div>
    </form>
  );
}
