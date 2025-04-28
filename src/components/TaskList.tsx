import { CalendarIcon, ToggleIcon, TrashIcon } from "./Icons";

export function TaskList() {
  return (
    <div className="flex items-center justify-between gap-5 bg-white py-4 px-6 rounded-md shadow">
      <div className="flex items-center gap-5">
        <button className="cursor-grab">
          <ToggleIcon />
        </button>
        <input type="checkbox" className="h-4 w-4 cursor-pointer"></input>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full inline-block bg-blue-500`}
            ></span>
            <h3 className="font-bold">Complete project proposal</h3>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center bg-red-100 text-red-600 p-1 text-xs rounded-full px-2">
              High
            </span>
            <span className="flex items-center bg-blue-700 text-white p-1 text-xs rounded-full px-2">
              Work
            </span>
            <div className="flex gap-2 items-center bg-gray-200 text-gray-500 p-1 text-xs rounded-full px-2">
              <CalendarIcon />
              <span>May 12</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TrashIcon />
      </div>
    </div>
  );
}
