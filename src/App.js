import { useState } from "react";
//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import NavMenu from "./components/NavMenu";
//import styles
import "./styles/app.scss";
//import background
import aurora from "./images/aurora.jpg";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <NavMenu />
      <div
        className="img-background"
        style={{ backgroundImage: `url(${aurora})` }}
      >
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
