export function PriorityFilter() {
  return (
    <div className="flex items-center gap-5">
      <label htmlFor="" className="text-gray-500 text-sm">
        Priority
      </label>
      <select className="bg-white p-2 rounded-md shadow">
        <option value="">Low</option>
        <option value="">Medium</option>
        <option value="">High</option>
      </select>
    </div>
  );
}
