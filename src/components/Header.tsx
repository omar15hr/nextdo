import { PlusIcon, SearchIcon } from "./Icons"

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
                placeholder="Buscar"
                className="w-full p-2 pl-10 font-inter bg-slate-100 rounded-md focus:outline-sky-500 focus:outline focus:border-sky-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
            <button className="flex items-center justify-center gap-2 p-2 w-[calc(50%-0.5rem)] sm:w-32 cursor-pointer bg-sky-300/20 rounded-md font-inter text-sm">
              <span className="h-3 w-3 bg-blue-500 rounded-full inline-block"></span>
              <span className="text-blue-900">All Tasks</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 w-[calc(50%-0.5rem)] sm:w-32 cursor-pointer hover:bg-gray-100 rounded-md transition duration-200 ease-in-out font-inter text-sm">
              <span className="h-3 w-3 bg-purple-500 rounded-full inline-block"></span>
              <span>Personal</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 w-[calc(50%-0.5rem)] sm:w-32 cursor-pointer hover:bg-gray-100 rounded-md transition duration-200 ease-in-out font-inter text-sm">
              <span className="h-3 w-3 bg-green-500 rounded-full inline-block"></span>
              <span>Work</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 w-[calc(50%-0.5rem)] sm:w-32 cursor-pointer hover:bg-gray-100 rounded-md transition duration-200 ease-in-out font-inter text-sm">
              <span className="h-3 w-3 bg-red-500 rounded-full inline-block"></span>
              <span>Urgent</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 w-[calc(50%-0.5rem)] sm:w-32 cursor-pointer hover:bg-gray-100 rounded-md transition duration-200 ease-in-out font-inter text-sm">
              <span className="h-3 w-3 bg-yellow-500 rounded-full inline-block"></span>
              <span>Projects</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-2 w-full sm:w-auto cursor-pointer hover:bg-gray-100 rounded-md transition duration-200 ease-in-out font-inter text-sm">
              <PlusIcon />
              <span>Add Category</span>
            </button>
          </div>
        </div>
      </div>
  )
}