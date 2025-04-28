import { Task } from "../interfaces/task.interface";
import { TaskCard } from "./TaskCard";


const tasks: Task[] = [
  {
    id: 1,
    title: "Complete project proposal",
    priority: "High",
    category: "Work",
    createdAt: "May 12",
  },
  {
    id: 2,
    title: "Schudele meeting",
    priority: "Medium",
    category: "Personal",
    createdAt: "May 20",
  },
  {
    id: 2,
    title: "Finish project",
    priority: "Low",
    category: "Projects",
    createdAt: "Jun 17",
  },
];

export function TaskList() {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
}
