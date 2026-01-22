import { useEffect, useState } from "react";

function TaskItem({ task, onDelete, onToggle }) {
  const priorityColor = {
    Low: "text-green-600",
    Medium: "text-yellow-500",
    High: "text-red-600",
  };

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (task.completed || !task.dueDate || !task.dueTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const due = new Date(`${task.dueDate}T${task.dueTime}`);
      const diffMs = due - now;
      const diffMin = Math.floor(diffMs / 60000);

      if (diffMs <= 0) {
        setTimeLeft("Overdue!");
      } else {
        const hours = Math.floor(diffMin / 60);
        const minutes = diffMin % 60;
        setTimeLeft(`${hours}h ${minutes}m left`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [task]);

  const getCountdownColor = () => {
    if (task.completed) return "text-gray-400";
    if (!task.dueDate || !task.dueTime) return "text-gray-500";

    const now = new Date();
    const due = new Date(`${task.dueDate}T${task.dueTime}`);
    const diffMin = Math.floor((due - now) / 60000);

    if (diffMin <= 0) return "text-red-600 font-bold";
    if (diffMin <= 30) return "text-yellow-500 font-semibold";
    return "text-green-600";
  };

  return (
    <div className="flex items-start justify-between p-4 bg-white shadow dark:bg-gray-800 rounded-xl">
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">Category: {task.category}</p>
        <p className={`text-sm font-medium ${priorityColor[task.priority]}`}>
          Priority: {task.priority}
        </p>
        {task.dueDate && task.dueTime && (
          <p className={`text-sm ${getCountdownColor()}`}>
            Due: {task.dueDate} {task.dueTime}{" "}
            {task.completed ? "" : `(${timeLeft})`}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
