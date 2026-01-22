import { useState, useEffect } from "react";
import Header from "../component/Header";
import TaskForm from "../component/TaskForm";
import TaskList from "../component/TaskList";
import FilterBar from "../component/FilterBar";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("smartTasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All"); // category
  const [status, setStatus] = useState("All"); // completion
  const [search, setSearch] = useState("");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("smartTasks", JSON.stringify(tasks));
  }, [tasks]);

  // CRUD functions
  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleComplete = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  // Filtered tasks
  const filteredTasks = tasks.filter((task) => {
    const categoryMatch = filter === "All" || task.category === filter;
    const statusMatch =
      status === "All" ||
      (status === "Completed" && task.completed) ||
      (status === "Pending" && !task.completed);
    const searchMatch = task.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && statusMatch && searchMatch;
  });

  return (
    <div className="min-h-screen text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Header />

      <div className="max-w-4xl p-4 mx-auto space-y-6">
        <TaskForm onAddTask={addTask} />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          status={status}
          setStatus={setStatus}
          search={search}
          setSearch={setSearch}
        />

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleComplete}
        />
      </div>
    </div>
  );
}

export default Dashboard;
