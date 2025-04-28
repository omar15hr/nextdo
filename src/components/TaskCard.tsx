import clsx from "clsx";
import { CalendarIcon, ToggleIcon, TrashIcon } from "./Icons";
import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
}

export function TaskCard({ task }: Props) {
  return (
    <div
          key={task.id}
          className="flex items-center justify-between gap-5 bg-white py-4 px-6 rounded-md shadow"
        >
          <div className="flex items-center gap-5">
            <button className="cursor-grab">
              <ToggleIcon />
            </button>
            <input type="checkbox" className="h-4 w-4 cursor-pointer"></input>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full inline-block bg-blue-500`}
                ></span>
                <h3 className="font-bold">{task.title}</h3>
              </div>
              <div className="flex gap-2">
                <span
                  className={clsx(
                    "flex items-center p-1 text-xs rounded-full px-2",
                    {
                      "bg-red-100 text-red-600": task.priority === "High",
                      "bg-orange-100 text-orange-600": task.priority === "Medium",
                      "bg-green-100 text-green-600": task.priority === "Low",
                    }
                  )}
                >
                  {task.priority}
                </span>
                <span className={clsx(
                    "flex items-center bg-blue-700 text-white p-1 text-xs rounded-full px-2",
                    {
                      "bg-green-600": task.category === "Personal",
                      "bg-purple-600": task.category === "Healt",
                      "bg-yellow-600": task.category === "Finance",
                      "bg-orange-600": task.category === "Projects",
                      "bg-sky-600": task.category === "Work",
                    }
                  )}>
                  {task.category}
                </span>
                <div className="flex gap-2 items-center bg-gray-200 text-gray-500 p-1 text-xs rounded-full px-2">
                  <CalendarIcon />
                  <span>{task.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TrashIcon />
          </div>
        </div>
  )
}