import { create } from "zustand";
import { Task } from "../interfaces/task.interface";
import { v4 as uuid } from "uuid";
import { createJSONStorage, persist } from "zustand/middleware";

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
    priority: "Alta",
    category: "Trabajo",
    createdAt: new Date(),
    completed: false,
  },
  {
    id: uuid(),
    title: "Schedule meeting",
    priority: "Media",
    category: "Personal",
    createdAt: new Date(),
    completed: false,
  },
  {
    id: uuid(),
    title: "Finish project",
    priority: "Baja",
    category: "Proyectos",
    createdAt: new Date(),
    completed: false,
  },
];

export const useTasksStore = create<State>()(
  persist(
    (set) => ({
      tasks: initialState,
      addTask: (task) =>
        set((state) => ({
          tasks: [task, ...state.tasks],
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
    }),
    {
      name: "task-store",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.tasks = state.tasks.map((task) => ({
            ...task,
            createdAt: new Date(task.createdAt),
          }));
        }
      },
    }
  )
);
