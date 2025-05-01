import { Task } from "../interfaces/task.interface";

export const priorityStyles: Record<Task["priority"], string> = {
  Alta: "bg-red-300 text-red-700",
  Media: "bg-orange-300 text-orange-700",
  Baja: "bg-green-300 text-green-700",
  Todas: ""
};

export const priorityTasksStyles: Record<Task["priority"], string> = {
  Alta: "bg-red-100",
  Media: "bg-orange-100",
  Baja: "bg-green-100",
  Todas: ""
};

export const categoryStyles: Record<Task["category"], string> = {
  Personal: "bg-green-600 text-white",
  Salud: "bg-red-600 text-white",
  Finanzas: "bg-yellow-600 text-white",
  Proyectos: "bg-purple-600 text-white",
  Trabajo: "bg-sky-600 text-white",
  Estudio: "bg-indigo-400 text-white",
  Reuniones: "bg-pink-400 text-white",
  Todas: ""
};
