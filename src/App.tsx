import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { CategoryFilter } from "./components/CategoryFilter";

function App() {
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <CategoryFilter />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
