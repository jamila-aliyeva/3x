import React, { useEffect } from "react";
import { useState } from "react";
import type { Task } from "../Types";

interface TaskFormProps {
  onAddTask: (description: string, deadline: string) => void;
  initialTask: Task | null;
  onCancel: () => void;
}

const TaskForm = ({
  onAddTask,
  onCancel,
  initialTask = null,
}: TaskFormProps) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (initialTask) {
      setDescription(initialTask.description);
      setDeadline(initialTask.deadline);
    } else {
      setDeadline("");
      setDescription("");
    }
  }, [initialTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !deadline) return;
    onAddTask(description, deadline);
    if (!initialTask) {
      setDeadline("");
      setDescription("");
    }
  };
  return (
    <div className="form-element">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <input
          type="date"
          placeholder="Task deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <div className="btns">
          <button className="add-btn" type="submit">{initialTask ? "Save" : "Add Task"}</button>
          {initialTask && (
            <button className="cencel-btn" type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
        {/* <button>Add Task</button> */}
      </form>
    </div>
  );
};

export default TaskForm;
