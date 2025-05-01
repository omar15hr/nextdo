import { useState } from "react";
import { useTasksStore } from "../store/store";
import { v4 as uuid } from "uuid";
import { Category, Priority } from "../interfaces/task.interface";

export function useTaskForm() {
  const addTask = useTasksStore((state) => state.addTask);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("Alta");
  const [category, setCategory] = useState<Category>("Personal");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrors("El título es obligatorio");
      return;
    };

    addTask({
      id: uuid(),
      title,
      priority,
      category,
      createdAt: new Date(),
      completed: false,
    });

    setTitle("");
    setPriority("Alta");
    setCategory("Personal");
    setErrors("");
  };

  return {
    title,
    priority,
    category,
    errors,
    setTitle,
    setPriority,
    setCategory,
    handleSubmit,
  };
}
