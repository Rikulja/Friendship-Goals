import { v4 as uuidv4 } from "uuid";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const textInputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        className="text-input"
        onChange={textInputHandler}
        type="text"
        value={inputText}
      />
      <button onClick={submitHandler}>+</button>
    </form>
  );
};

export default Form;
