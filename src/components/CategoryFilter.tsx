import { categories } from "../constants/categories";
import { CategoryButton } from "./CategoryButton";
import { PlusIcon } from "./Icons";
import { AddTaskForm } from "./AddTaskForm";
import { useState } from "react";

export function CategoryFilter() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {categories.map(({ text, color, icon: Icon }) => (
        <CategoryButton key={text} text={text} color={color} icon={<Icon />} />
      ))}
      <div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="flex items-center justify-center w-42 h-11 gap-2 p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md cursor-pointer transition duration-300 ease-in-out"
        >
          <PlusIcon />
          <span>New Task</span>
        </button>

        <AddTaskForm onClose={() => setIsVisible(false)} />
      </div>
    </div>
  );
}
