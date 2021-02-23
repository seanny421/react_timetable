import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import Menu from './components/Menu';
import TodoList from "./components/TodoList";

function App() {
  //state
  const [menu, setMenu] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
 

  return (
    <div className="App">
      <Menu menu={menu} setMenu={setMenu}/>
      <header>
        <h1 className="day-of-the-week">Sean's Todo List</h1>
      </header>
      <Form
      setTodos={setTodos}
      todos={todos}
      setInputText={setInputText}
      inputText={inputText}/>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
