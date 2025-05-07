import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskOverviewPanel } from "./components/TaskOverviewPanel";

function App() {
  return (
    <div className="flex flex-col bg-indigo-100 min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 p-5">
          <TaskOverviewPanel />
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
