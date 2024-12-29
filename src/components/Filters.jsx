const Filters = ({ onFilterChange, onSearchChange }) => {
    const handleFilter = (filter) => {
      onFilterChange(filter);
    };
  
    const handleSearch = (e) => {
      onSearchChange(e.target.value);
    };
  
    return (
      <div className="filters">
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("Active")}>Active</button>
        <button onClick={() => handleFilter("Completed")}>Completed</button>
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={handleSearch}
        />
      </div>
    );
  };
  
  export default Filters;
  