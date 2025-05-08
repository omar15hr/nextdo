import clsx from "clsx";
import { CircleCheckIcon, CircleIcon, ToggleIcon, TrashIcon } from "./Icons";
import { Task } from "../interfaces/task.interface";
import { useTasksStore } from "../store/store";
import { useState } from "react";
import { formatDate } from "../utils/date-format";
import { categoryStyles, priorityStyles } from "../constants/taskStyles";
import { CardWithAnimations } from "./CardWithAnimations";
import { toast } from "sonner";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  task: Task;
}

export function TaskCard({ task }: Props) {
  const deleteTask = useTasksStore((state) => state.deleteTask);
  const toggleCompleteTask = useTasksStore((state) => state.toggleCompleteTask);
  const restoreTask = useTasksStore((state) => state.restoreTask);

  const [isRemoving, setIsRemoving] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const handleDelete = async () => {
    setIsRemoving(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    toast.success("Tarea eliminada", {
      duration: 3000,
      description: `${task.title} ha sido eliminada`,
      action: {
        label: "Deshacer",
        onClick: () => {
          restoreTask(task.id);
        },
        actionButtonStyle: {
          color: "blue",
        },
      },
    });
    deleteTask(task);
  };

  const handleToggleComplete = () => {
    toggleCompleteTask(task.id, {
      ...task,
      completed: !task.completed,
    });
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none'
  };

  return (
    <CardWithAnimations isRemoving={isRemoving} completed={task.completed}>
      <div
        style={style}
        className={clsx(
          "flex gap-5 py-4 px-6 rounded-md justify-between shadow-md bg-slate-700 relative",
          task.completed && "opacity-80"
        )}
      >
        <div
          className={clsx(
            "absolute left-0 top-0 w-1 h-full rounded-l-md",
            priorityStyles[task.priority]
          )}
        />
        <div className="flex items-center gap-5">
          <button
            className="cursor-grab"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
          >
            <ToggleIcon />
          </button>

          <button onClick={handleToggleComplete}>
            {task.completed ? <CircleCheckIcon /> : <CircleIcon />}
          </button>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-indigo-100">{task.title}</h3>
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
          <span className="flex gap-2 items-center text-indigo-100 text-xs rounded-full px-2">
            {formatDate(task.createdAt)}
          </span>

          <button onClick={handleDelete}>
            <TrashIcon />
          </button>
        </div>
      </div>
    </CardWithAnimations>
  );
}
