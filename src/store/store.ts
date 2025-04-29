import { create } from "zustand";
import { Task } from "../interfaces/task.interface";
import { v4 as uuid } from "uuid";

interface State {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleCompleteTask: (id: string, updatedTask: Task) => void;
}

const initialState: Task[] = [
  {
    id: uuid(),
    title: "Complete project proposal",
    priority: "High",
    category: "Work",
    createdAt: new Date(),
    completed: false,
  },
  {
    id: uuid(),
    title: "Schudele meeting",
    priority: "Medium",
    category: "Personal",
    createdAt: new Date(),
    completed: false,
  },
  {
    id: uuid(),
    title: "Finish project",
    priority: "Low",
    category: "Projects",
    createdAt: new Date(),
    completed: false,
  },
];

export const useTasksStore = create<State>((set) => ({
  tasks: initialState,
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleCompleteTask: (id: string, updatedTask: Task) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? updatedTask : task
      ),
    })),
}));
