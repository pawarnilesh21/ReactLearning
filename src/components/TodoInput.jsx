import { useState } from "react";

const TodoInput = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return alert("Task name is required");
    onAddTask({ taskName, deadline, priority, isCompleted: false });
    setTaskName("");
    setDeadline("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoInput;
