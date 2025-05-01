import { create } from "zustand";
import { Task } from "../interfaces/task.interface";
import { v4 as uuid } from "uuid";
import { createJSONStorage, persist } from "zustand/middleware";

type Priority = Task["priority"] | "Todas";

interface State {
  // Tasks methods
  tasks: Task[];
  deletedTasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  toggleCompleteTask: (id: string, updatedTask: Task) => void;
  restoreTask: (taskId: string) => void;
  // Filters
  filterPriority: Priority;
  filterCategory: string;
  setFilterPriority: (priority: Priority) => void;
  setFilterCategory: (category: string) => void;
  // Count method
  tasksCountByCategory: (category: string) => void;
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
    (set, get) => ({
      // Tasks
      tasks: initialState,
      deletedTasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [task, ...state.tasks],
        })),
      deleteTask: (task) => {
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== task.id),
          deletedTasks: [...state.deletedTasks, task],
        }));

        setTimeout(() => {
          set((state) => ({
            deletedTasks: state.deletedTasks.filter((t) => t.id !== task.id),
          }));
        }, 10000);
      },
      toggleCompleteTask: (id: string, updatedTask: Task) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? updatedTask : task
          ),
        })),
      restoreTask: (taskId) =>
        set((state) => {
          const task = state.deletedTasks.find((t) => t.id === taskId);
          if (!task) return state;

          return {
            tasks: [task, ...state.tasks],
            deletedTasks: state.deletedTasks.filter((t) => t.id !== taskId),
          };
        }),
      // Filters
      filterPriority: "Todas",
      filterCategory: "Todas",
      setFilterPriority: (priority) => set({ filterPriority: priority }),
      setFilterCategory: (category) => set({ filterCategory: category }),
      // Count method
      tasksCountByCategory: (category: string) => {
        return category === "Todas"
          ? get().tasks.length
          : get().tasks.filter((task) => task.category === category).length;
      }
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
