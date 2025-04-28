import { CategoryButton } from "./components/CategoryButton";
import { Header } from "./components/Header";
import { PlusIcon } from "./components/Icons";
import { TaskList } from "./components/TaskList";

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
        <button className="flex items-center justify-center w-42 h-11 gap-2 p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow cursor-pointer transition duration-300 ease-in-out">
          <PlusIcon />
          <span>New Task</span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3"></div>
      <div className="grid grid-rows-2 gap-10 p-5">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-md shadow"></div>
          <div className="bg-white p-5 rounded-md shadow"></div>
        </div>
        <div className="flex flex-col rounded-md gap-2">
          <h2 className="text-xl">All Tasks</h2>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
