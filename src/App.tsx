import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskOverviewPanel } from "./components/TaskOverviewPanel";

function App() {
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 p-5">
        <TaskOverviewPanel />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
