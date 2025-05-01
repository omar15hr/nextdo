export type Priority = "Todas" | "Alta" | "Media" | "Baja";
export type Category = "Todas" | "Personal" | "Salud" | "Finanzas" | "Proyectos" | "Trabajo" | "Estudio" | "Reuniones";

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  category: Category;
  createdAt: Date;
  completed: boolean;
}
