import { useTasksStore } from "../store/store";
import { PriorityFilter } from "./PriorityFilter";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-blue-500">Tareas</h2>
        {tasks.length > 0 ? <PriorityFilter /> : ""}
      </div>
      {tasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500 bg-gray-300 rounded-xl">
          No hay tareas pendientes. ¡Agrega una nueva tarea para comenzar!
        </div>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
}
