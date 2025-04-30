import { useState } from "react";
import { useTasksStore } from "../store/store";
import { PlusIcon } from "./Icons";
import { v4 as uuid } from "uuid";
import { Category, Priority } from "../interfaces/task.interface";

export function AddTaskForm() {
  const addTask = useTasksStore((state) => state.addTask);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("Alta");
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
    setPriority("Alta");
    setCategory("Personal");
  };

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
              <label className="text-sm">
                Prioridad
              </label>
              <select
                className="border p-2 rounded-md border-slate-300"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
              >
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm">
                Categoría
              </label>
              <select
                className="border p-2 rounded-md border-slate-300"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                <option value="Personal">Personal</option>
                <option value="Salud">Salud</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Proyectos">Proyectos</option>
                <option value="Trabajo">Trabajo</option>
                <option value="Estudio">Estudio</option>
                <option value="Reuniones">Reuniones</option>
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
