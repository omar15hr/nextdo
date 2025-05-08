import { Toaster } from "sonner";
import { PriorityFilter } from "./PriorityFilter";
import { TaskCard } from "./TaskCard";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useTaskOrder } from "../hooks/useTaskOrder";

export function TaskList() {
  const { sortedTasks, handleDragEnd } = useTaskOrder();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-2 my-10 p-5 max-w-6xl justify-center mx-auto w-full">
        <div className="flex gap-4 items-center">
          <h2 className="text-2xl font-bold text-indigo-100">Tareas</h2>
          <PriorityFilter />
        </div>

        <SortableContext
          items={sortedTasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {sortedTasks.length === 0 ? (
            <div className="text-center py-8 text-indigo-100 bg-gray-700 rounded-xl">
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
