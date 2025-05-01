import { categories } from "../constants/categories";
import { useTasksStore } from "../store/store";
import { CategoryButton } from "./CategoryButton";
import { AddTaskForm } from "./TaskForm";

export function CategoryFilter() {
  const setFilterCategory = useTasksStore((state) => state.setFilterCategory);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {categories.map(({ text, color, icon: Icon }) => (
          <CategoryButton
            key={text}
            text={text}
            color={color}
            icon={<Icon />}
            onClick={() => setFilterCategory(text)}
          />
        ))}
      </div>
        <AddTaskForm />
    </div>
  );
}
