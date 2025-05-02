import { Toaster } from "sonner";
import { PriorityFilter } from "./PriorityFilter";
import { TaskCard } from "./TaskCard";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useTaskOrder } from "../hooks/useTaskOrder";

export function TaskList() {
  const { sortedTasks, handleDragEnd } = useTaskOrder();
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
