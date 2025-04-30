import { categories } from "../constants/categories";
import { CategoryButton } from "./CategoryButton";
import { AddTaskForm } from "./AddTaskForm";

export function CategoryFilter() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        {categories.map(({ text, color, icon: Icon }) => (
          <CategoryButton
            key={text}
            text={text}
            color={color}
            icon={<Icon />}
          />
        ))}
      </div>
        <AddTaskForm />
    </div>
  );
}
