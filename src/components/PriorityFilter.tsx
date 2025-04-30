import { Priority } from "../interfaces/task.interface";
import { useTasksStore } from "../store/store";
import { SelectField } from "./SelectField";

export function PriorityFilter() {
  const filterPriority = useTasksStore((state) => state.filterPriority);
  const setFilterPriority = useTasksStore((state) => state.setFilterPriority);
  return (
    <SelectField
      id="priorityFilter"
      label="Prioridad"
      options={["Todas", "Baja", "Media", "Alta"]}
      value={filterPriority}
      onChange={(e) => setFilterPriority(e.target.value as Priority)}
    />
  );
}
