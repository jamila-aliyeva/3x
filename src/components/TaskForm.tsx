import React from "react";
import { useState } from "react";

interface TaskFormProps {
  onAddTask: (description: string, deadline: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !deadline) return;
    onAddTask(description, deadline);
    setDeadline("");
    setDescription("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Task deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
