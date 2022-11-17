const ToDo = ({ todos, todo, text, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => todo.id !== el.id));
  };
  return (
    <div>
      <li>{text}</li>
      <button onClick={deleteHandler}>X</button>
    </div>
  );
};

export default ToDo;
