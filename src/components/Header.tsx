import { PlusIcon, SearchIcon } from "./Icons";

const categoryButtons = [
  { name: "All Tasks", color: "bg-blue-500" },
  { name: "Personal", color: "bg-purple-500" },
  { name: "Work", color: "bg-green-500" },
  { name: "Urgent", color: "bg-red-500" },
  { name: "Projects", color: "bg-yellow-500" },
];

export function Header() {
  return (
    <div className="bg-white py-6 md:h-46 flex items-center shadow">
      <div className="flex flex-col gap-8 mx-auto w-11/12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
          <h1 className="text-3xl md:text-4xl text-blue-500 font-permanent-marker">
            NextDo
          </h1>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search task..."
              className="w-full p-2 pl-10 font-inter bg-slate-100 rounded-md focus:border-1 focus:outline-sky-500 focus:outline focus:border-sky-500"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
          {categoryButtons.map(({ name, color }) => (
            <button
              key={name}
              className="flex items-center justify-center gap-2 p-2 w-[calc(50%-0.5rem)] sm:w-32 cursor-pointer rounded-md font-inter text-sm hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <span
                className={`h-3 w-3 rounded-full inline-block ${color}`}
              ></span>
              <span className="">{name}</span>
            </button>
          ))}
          <button className="flex items-center justify-center gap-2 p-2 w-full sm:w-auto cursor-pointer bg-blue-500 text-white hover:bg-blue-600 rounded-md transition duration-300 ease-in-out font-inter text-sm">
            <PlusIcon />
            <span>Add Category</span>
          </button>
        </div>
      </div>
    </div>
  );
}
