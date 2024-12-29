import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
