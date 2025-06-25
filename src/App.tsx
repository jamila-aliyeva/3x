import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./Types";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // useEffect(() => {
  //   const saved = localStorage.getItem("tasks");
  //   if (saved) {
  //     setTasks(JSON.parse(saved));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (description: string, deadline: string) => {
    const newTask: Task = {
      id: Date.now(),
      description,
      deadline,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const onToggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h1>My To-do App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={onToggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
