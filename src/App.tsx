import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskOverviewPanel } from "./components/TaskOverviewPanel";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto">
        <TaskForm />
        <TaskOverviewPanel />
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
