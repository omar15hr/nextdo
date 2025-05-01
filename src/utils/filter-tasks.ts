import { Task } from "../interfaces/task.interface";

interface Filters {
  priority?: string;
  category?: string;
}

export function filterTasks(tasks: Task[], filters: Filters): Task[] {
  return tasks.filter((task) => {
    const priorityMatch =
      !filters.priority ||
      filters.priority === "Todas" ||
      task.priority === filters.priority;

    const categoryMatch =
      !filters.category ||
      filters.category === "Todas" ||
      task.category === filters.category;

    return priorityMatch && categoryMatch;
  });
}
