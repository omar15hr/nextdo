import { CategoryButton } from "./components/CategoryButton";
import { Header } from "./components/Header";
import { PlusIcon } from "./components/Icons";

const categories = [
  { text: "All Tasks", color: "bg-blue-400" },
  { text: "Personal", color: "bg-green-400" },
  { text: "Healt", color: "bg-purple-400" },
  { text: "Finance", color: "bg-yellow-400" },
  { text: "Projects", color: "bg-orange-400" },
  { text: "Work", color: "bg-sky-400" },
];

function App() {
  return (
    <div className="flex flex-col bg-[#edede9] min-h-screen">
      <Header />
      <div className="flex flex-wrap items-center justify-center gap-5 p-5">
        {categories.map(({ text, color }) => (
          <CategoryButton text={text} color={color} />
        ))}
        <button className="flex items-center justify-center w-42 h-11 gap-2 p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow cursor-pointer">
          <PlusIcon />
          <span>New Task</span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3"></div>
      <div className="grid grid-rows-2 gap-10 p-5">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-md shadow">Hola</div>
          <div className="bg-white p-5 rounded-md shadow">Hola</div>
        </div>
        <div className="flex flex-col rounded-md gap-2">
          <h2 className="text-xl">All Tasks</h2>
          <div className="flex items-center justify-between gap-5 bg-white p-3 px-6 rounded-md shadow">
            <div className="flex items-center gap-5">
              <button className="cursor-grab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-medium"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20h16" />
                  <path d="M4 12h16" />
                  <path d="M4 4h16" />
                </svg>
              </button>
              <input type="checkbox"></input>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full inline-block bg-blue-500`}
                  ></span>
                  <h3 className="font-bold">Complete project proposal</h3>
                </div>
                <div>tags</div>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-trash text-gray-500 cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
                <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
