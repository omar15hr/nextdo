import { Header } from "./components/Header";
import { PriorityFilter } from "./components/PriorityFilter";
import { TaskList } from "./components/TaskList";
import { CategoryFilter } from "./components/CategoryFilter";

function App() {
  return (
    <div className="flex flex-col bg-[#edede9] min-h-screen">
      <Header />
      <div className="flex flex-col gap-10 p-5">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-md shadow"></div>
          <div className="bg-white p-5 rounded-md shadow"></div>
        </div>

        <CategoryFilter />

        <div className="flex flex-col justify-center rounded-md gap-2">
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-xl">All Tasks</h2>
            <PriorityFilter />
          </div>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
