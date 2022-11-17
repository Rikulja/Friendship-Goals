import ToDo from "./ToDo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <ul>
        {todos.map((todo) => (
          <ToDo
            todo={todo}
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
