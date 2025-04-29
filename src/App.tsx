import { useState } from "react";
import { CategoryButton } from "./components/CategoryButton";
import { Header } from "./components/Header";
import { CoinIcon, HeartIcon, PlusIcon, SuitcaseIcon, TagIcon, UserIcon, WorkIcon } from "./components/Icons";
import { PriorityFilter } from "./components/PriorityFilter";
import { TaskList } from "./components/TaskList";
import { AddTaskForm } from "./components/AddTaskForm";
import { AnimatePresence, motion } from "motion/react";

const categories = [
  { text: "All Tasks", color: "text-blue-500", icon: <TagIcon /> },
  { text: "Personal", color: "text-green-500", icon: <UserIcon /> },
  { text: "Healt", color: "text-red-500", icon: <HeartIcon /> },
  { text: "Finance", color: "text-yellow-500", icon: <CoinIcon /> },
  { text: "Projects", color: "text-purple-500", icon: <SuitcaseIcon /> },
  { text: "Work", color: "text-sky-500", icon: <WorkIcon /> },
];

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col bg-[#edede9] min-h-screen">
      <Header />
      <div className="flex flex-col gap-10 p-5">
        <div className="rounded-md grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-md shadow"></div>
          <div className="bg-white p-5 rounded-md shadow"></div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {categories.map(({ text, color, icon }) => (
            <CategoryButton text={text} color={color} icon={icon} />
          ))}
          <motion.button
            onClick={() => setIsVisible(!isVisible)}
            whileTap={{ y: 1 }}
            className="flex items-center justify-center w-42 h-11 gap-2 p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow cursor-pointer transition duration-300 ease-in-out"
          >
            <PlusIcon />
            <span>New Task</span>
          </motion.button>
        </div>

          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AddTaskForm onClose={() => setIsVisible(false)} />
              </motion.div>
            ) : null}
          </AnimatePresence>

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
