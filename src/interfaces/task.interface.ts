export type Priority = "High" | "Medium" | "Low";
export type Category = "Personal" | "Health" | "Finance" | "Projects" | "Work";

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  category: Category;
  createdAt: Date;
  completed: boolean;
}
