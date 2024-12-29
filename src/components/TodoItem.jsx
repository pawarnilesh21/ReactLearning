const TodoItem = ({ task, onDeleteTask, onToggleComplete }) => {
    const { id, taskName, deadline, priority, isCompleted } = task;
  
    return (
      <div className={`todo-item ${isCompleted ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
        />
        <div className="task-details">
          <h3>{taskName}</h3>
          <p>Priority: {priority}</p>
          <p>Deadline: {deadline || "None"}</p>
        </div>
        <button onClick={() => onDeleteTask(id)}>Delete</button>
      </div>
    );
  };
  
  export default TodoItem;
  