// import React from "react";
import type { Task } from "../Types";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDelete }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => onToggleComplete(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.description} - {task.deadline}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
