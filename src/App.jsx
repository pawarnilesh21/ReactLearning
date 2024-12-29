import { useState } from "react";
import TodoInput from "./components/TodoInput";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleAddTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now() };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleFilterChange = (filter) => setFilter(filter);

  const handleSearchChange = (keyword) => setSearchKeyword(keyword);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.isCompleted;
    if (filter === "Completed") return task.isCompleted;
    return true;
  }).filter((task) => task.taskName.toLowerCase().includes(searchKeyword.toLowerCase()));

  return (
    <div className="app">
      <h1>Tasker</h1>
      <TodoInput onAddTask={handleAddTask} />
      <Filters onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <TodoList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
