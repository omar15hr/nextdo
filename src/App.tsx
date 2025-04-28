import { AddTaskForm } from "./components/AddTaskForm";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-5 bg-[#edede9] min-h-screen">
      <Header />
      <div className="p-5">
        <AddTaskForm />
      </div>
    </div>
  );
}

export default App;
