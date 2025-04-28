export function TaskSummary() {
  return (
    <div className="bg-white p-5 flex flex-col justify-center items-center gap-10 shadow h-64 rounded-md">
      <h2 className="text-lg font-bold">Task Summary</h2>
      <div className="flex flex-wrap items-center gap-10 text-center">
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-blue-500">6</span>
          <span className="text-md text-gray-600">Total tasks</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-green-500">0</span>
          <span className="text-md text-gray-600">Completed</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-yellow-500">7</span>
          <span className="text-md text-gray-600">Incompleted</span>
        </div>
      </div>
    </div>
  );
}
