import clsx from "clsx";
import { CircleCheckIcon, CircleIcon, ToggleIcon, TrashIcon } from "./Icons";
import { Task } from "../interfaces/task.interface";
import { useTasksStore } from "../store/store";
import { motion } from "motion/react";

interface Props {
  task: Task;
}

const priorityStyles: Record<Task["priority"], string> = {
  High: "bg-red-300 text-red-700",
  Medium: "bg-orange-300 text-orange-700",
  Low: "bg-green-300 text-green-700",
};

const priorityTasksStyles: Record<Task["priority"], string> = {
  High: "bg-red-100",
  Medium: "bg-orange-100",
  Low: "bg-green-100",
};

const categoryStyles: Record<Task["category"], string> = {
  Personal: "bg-green-600 text-white",
  Health: "bg-purple-600 text-white",
  Finance: "bg-yellow-600 text-white",
  Projects: "bg-orange-600 text-white",
  Work: "bg-sky-600 text-white",
};

export function TaskCard({ task }: Props) {
  const deleteTask = useTasksStore((state) => state.deleteTask);
  const toggleCompleteTask = useTasksStore((state) => state.toggleCompleteTask);

  const handleToggleComplete = () => {
    toggleCompleteTask(task.id, {
      ...task,
      completed: !task.completed,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
      }}
      className={clsx(
        "flex gap-5 py-4 px-6 rounded-md justify-between shadow-md",
        priorityTasksStyles[task.priority],
        task.completed && "opacity-40"
      )}
    >
      <div className="flex items-center gap-5">
        <button className="cursor-grab">
          <ToggleIcon />
        </button>

        <button onClick={handleToggleComplete}>
          {task.completed ? <CircleCheckIcon /> : <CircleIcon />}
        </button>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h3 className="">{task.title}</h3>
          </div>
          <div className="flex gap-2">
            <span
              className={clsx(
                "flex items-center p-1 text-xs rounded-full px-2",
                priorityStyles[task.priority]
              )}
            >
              {task.priority}
            </span>
            <span
              className={clsx(
                "flex items-center p-1 text-xs rounded-full px-2",
                categoryStyles[task.category]
              )}
            >
              {task.category}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center text-gray-600 text-xs rounded-full px-2">
          <span>{task.createdAt.toLocaleDateString()}</span>
        </div>
        <button onClick={() => deleteTask(task.id)}>
          <TrashIcon />
        </button>
      </div>
    </motion.div>
  );
}
