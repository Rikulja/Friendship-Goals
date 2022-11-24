import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ todos, todo, text, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => todo.id !== el.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={deleteHandler}>
        <FontAwesomeIcon icon="fa-sharp fa-solid fa-xmark" />
      </button>
      <button onClick={completeHandler}>completed</button>
    </div>
  );
};

export default ToDo;
