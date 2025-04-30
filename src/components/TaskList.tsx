import { useTasksStore } from "../store/store";
import { PriorityFilter } from "./PriorityFilter";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const tasks = useTasksStore((state) => state.tasks);
  const filterPriority = useTasksStore((state) => state.filterPriority);

  const filteredTasks = filterPriority
    ? tasks.filter((task) => task.priority === filterPriority)
    : tasks;

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-500">Tareas</h2>
        {tasks.length > 0 && <PriorityFilter />}
      </div>

      {sortedTasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500 bg-gray-300 rounded-xl">
          No hay tareas.
        </div>
      ) : (
        sortedTasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
}
