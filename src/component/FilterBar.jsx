// components/FilterBar.jsx
function FilterBar({ filter, setFilter, status, setStatus, search, setSearch }) {
  return (
    <div className="flex flex-col gap-3 my-4 md:flex-row">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 text-gray-900 border rounded dark:bg-gray-700 dark:text-white"
      >
        <option value="All">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Learning">Learning</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 text-gray-900 border rounded dark:bg-gray-700 dark:text-white"
      >
        <option value="All">All Status</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-2 text-gray-900 border rounded dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
}

export default FilterBar;
