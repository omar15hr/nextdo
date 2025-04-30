import clsx from "clsx";
import { CircleCheckIcon, CircleIcon, ToggleIcon, TrashIcon } from "./Icons";
import { Task } from "../interfaces/task.interface";
import { useTasksStore } from "../store/store";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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

  const [isRemoving, setIsRemoving] = useState(false);

  const handleDelete = async() => {
    setIsRemoving(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    deleteTask(task.id);
  }

  const handleToggleComplete = () => {
    toggleCompleteTask(task.id, {
      ...task,
      completed: !task.completed,
    });
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isRemoving ? 0 : task.completed ? 0.4 : 1,
          x: isRemoving ? -100 : 0,
          scale: isRemoving ? 0.8 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
        }}
        exit={{ opacity: 0, scale: 0.8 }}
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
          <button onClick={handleDelete}>
            <TrashIcon />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
