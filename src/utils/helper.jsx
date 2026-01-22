// helpers.jsx
// This file contains reusable helper functions
// It is used for analytics, calculations, and shared logic

// Calculate task progress statistics
export function getTaskProgress(tasks) {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const pending = total - completed;

  return {
    total,
    completed,
    pending,
    percentage:
      total === 0 ? 0 : Math.round((completed / total) * 100),
  };
}

// Group tasks by category
export function groupTasksByCategory(tasks) {
  return tasks.reduce((groups, task) => {
    const category = task.category || "Uncategorized";

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(task);
    return groups;
  }, {});
}

// Sort tasks by due date
export function sortTasksByDate(tasks) {
  return [...tasks].sort((a, b) => {
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
}
