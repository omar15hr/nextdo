export type Priority = "Alta" | "Media" | "Baja";
export type Category = "Personal" | "Salud" | "Finanzas" | "Proyectos" | "Trabajo" | "Estudio" | "Reuniones";

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  category: Category;
  createdAt: Date;
  completed: boolean;
}
