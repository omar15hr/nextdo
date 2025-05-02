import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useTasksStore } from "../store/store";
import { filterTasks } from "../utils/filter-tasks";

export function useTaskOrder() {
  const tasks = useTasksStore((state) => state.tasks);
  const filterPriority = useTasksStore((state) => state.filterPriority);
  const filterCategory = useTasksStore((state) => state.filterCategory);
  const reorderTasksById = useTasksStore((state) => state.reorderTasksByIds);

  const filteredTasks = filterTasks(tasks, {
    priority: filterPriority,
    category: filterCategory,
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const oldIndex = tasks.findIndex((task) => task.id === active.id);
    const newIndex = tasks.findIndex((task) => task.id === over?.id);
    const newOrder = arrayMove(tasks, oldIndex, newIndex).map(
      (task) => task.id
    );
    reorderTasksById(newOrder);
  };
  return {
    sortedTasks, 
    handleDragEnd,
  }
}