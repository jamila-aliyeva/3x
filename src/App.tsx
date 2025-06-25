import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./Types";
import "./style/style.css";

function App() {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

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

  const updateTask = (description: string, deadline: string) => {
    if (!editingTask) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === editingTask.id ? { ...t, description, deadline } : t
      )
    );
    setEditingTask(null);
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
    if (editingTask?.id === id) setEditingTask(null);
  };

  return (
    <div
      className="container"
    >
      <h1>My Todo App</h1>
      <TaskForm
        onAddTask={editingTask ? updateTask : addTask}
        initialTask={editingTask}
        onCancel={() => setEditingTask(null)}
      />
      <TaskList
        tasks={tasks}
        onToggleComplete={onToggleComplete}
        onDelete={deleteTask}
        onStartEdit={(task) => setEditingTask(task)}
      />
    </div>
  );
}

export default App;
