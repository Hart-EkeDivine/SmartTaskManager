import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle }) {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
        No tasks yet. Add one above!
      </p>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TaskList;
