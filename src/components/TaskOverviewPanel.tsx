import { categories } from "../constants/categories";
import { useTasksStore } from "../store/store";
import { CategoryButton } from "./CategoryButton";

export function TaskOverviewPanel() {
  const setFilterCategory = useTasksStore((state) => state.setFilterCategory);
  return (
    <div className="flex flex-wrap justify-center mt-5 gap-2">
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
  );
}
