import { create } from "zustand";
import { Task } from "../interfaces/task.interface";

interface State {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const initialState: Task[] = [
  {
    id: 1,
    title: "Complete project proposal",
    priority: "High",
    category: "Work",
    createdAt: "May 12",
  },
  {
    id: 2,
    title: "Schudele meeting",
    priority: "Medium",
    category: "Personal",
    createdAt: "May 20",
  },
  {
    id: 3,
    title: "Finish project",
    priority: "Low",
    category: "Projects",
    createdAt: "Jun 17",
  },
];

export const useTasksStore = create<State>((set) => ({
  tasks: initialState,
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
