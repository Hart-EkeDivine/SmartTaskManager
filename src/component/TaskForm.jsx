import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate || !dueTime) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      priority,
      dueDate,
      dueTime,
      completed: false,
      createdAt: Date.now(),
    };

    onAddTask(newTask);

    // Reset form
    setTitle("");
    setCategory("Work");
    setPriority("Medium");
    setDueDate("");
    setDueTime("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-4 bg-white shadow dark:bg-gray-800 rounded-xl"
    >
      <h2 className="text-xl font-semibold">Add New Task</h2>

      <input
        type="text"
        placeholder="Task title..."
        className="w-full p-2 border rounded dark:bg-gray-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-3">
        <select
          className="p-2 border rounded dark:bg-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Work</option>
          <option>Personal</option>
          <option>Learning</option>
        </select>

        <select
          className="p-2 border rounded dark:bg-gray-700"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="date"
          className="p-2 border rounded dark:bg-gray-700"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="time"
          className="p-2 border rounded dark:bg-gray-700"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
      
    </form>
  );
}

export default TaskForm;
