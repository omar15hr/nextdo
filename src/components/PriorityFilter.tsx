import { Priority } from "../interfaces/task.interface";
import { useTasksStore } from "../store/store";

export function PriorityFilter() {
  const filterPriority = useTasksStore((state) => state.filterPriority);
  const setFilterPriority = useTasksStore((state) => state.setFilterPriority);
  return (
    <div className="flex items-center gap-5">
      <label className="text-gray-500 text-sm">Prioridad</label>
      <select
        className="bg-white p-2 rounded-md shadow-md cursor-pointer"
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value as Priority)}
      >
        <option value="">-</option>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
    </div>
  );
}
