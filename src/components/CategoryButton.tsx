import clsx from "clsx";
import { useTasksStore } from "../store/store";
import { styleMap } from "../utils/style-map";

interface Props {
  text: string;
  color: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export function CategoryButton({ text, color, icon, onClick }: Props) {
  const filterCategory = useTasksStore((state) => state.filterCategory);
  const isSelected = filterCategory === text;
  const styles = styleMap[text] ?? {};
  const count = useTasksStore((state) => state.tasksCountByCategory(text)) ?? 0;

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center w-38 gap-2 p-2 rounded-md shadow-md cursor-pointer transition duration-300 ease-in-out",
        isSelected && styles.bg,
        isSelected && styles.ring,
        isSelected && styles.text,
        isSelected && "ring-1",
        !isSelected && "bg-slate-700 hover:bg-white/20 text-indigo-100"
      )}
    >
      <span className={`${color}`}>{icon}</span>
      <span className="text-sm">{text}</span>
      <span className="bg-slate-600 p-1 px-3 rounded-full text-xs text-indigo-100">
        {count}
      </span>
    </button>
  );
}
