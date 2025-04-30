export function PriorityFilter() {
  return (
    <div className="flex items-center gap-5">
      <label htmlFor="" className="text-gray-500 text-sm">
        Prioridad
      </label>
      <select className="bg-white p-2 rounded-md shadow-md cursor-pointer">
        <option value="">-</option>
        <option value="Low">Baja</option>
        <option value="Medium">Media</option>
        <option value="High">Alta</option>
      </select>
    </div>
  );
}
