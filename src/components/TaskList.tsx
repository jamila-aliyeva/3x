// import React from "react";
import type { Task } from "../Types";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onStartEdit: (task: Task) => void;
}

const TaskList = ({
  tasks,
  onToggleComplete,
  onDelete,
  onStartEdit,
}: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li className="tasks-list" key={task.id}>
          <span
            onClick={() => onToggleComplete(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.description} - {task.deadline}
          </span>
           <br />
          <button className="edit-btn" onClick={() => onStartEdit(task)}>Edit</button>
          <button
          className="delete-btn"
            onClick={() => onDelete(task.id)}
            
          >
            Delete
          </button>
       </li>
      ))}
    </ul>
  );
};

export default TaskList;
