import { useTasksStore } from "../store/store";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
