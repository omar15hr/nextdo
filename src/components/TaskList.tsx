import { Toaster } from "sonner";
import { useTasksStore } from "../store/store";
import { PriorityFilter } from "./PriorityFilter";
import { TaskCard } from "./TaskCard";
import { filterTasks } from "../utils/filter-tasks";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export function TaskList() {
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

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="space-y-3">
        <div className="flex gap-4 items-center">
          <h2 className="text-2xl font-bold text-blue-500">Tareas</h2>
          <PriorityFilter />
        </div>

        <SortableContext
          items={sortedTasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {sortedTasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500 bg-gray-300 rounded-xl">
              No hay tareas.
            </div>
          ) : (
            sortedTasks.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </SortableContext>
        <Toaster />
      </div>
    </DndContext>
  );
}
