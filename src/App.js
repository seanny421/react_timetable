import { render } from "@testing-library/react";
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
  const [today, setToday] = useState("");

  document.addEventListener('DOMContentLoaded', () =>{
    setToday(getToday());

  });

  function getToday(){
    var d = new Date();
    var day = d.getDay();
    switch(day){
      case 0:
          return "Sunday"
      case 1:
          return "Monday"
      case 2:
          return "Tuesday"
      case 3:
          return "Wednesday"
      case 4:
          return "Thursday"
      case 5:
          return "Friday"
      case 6:
          return "Saturday"
    }
  }

  return (
    <div className="App">
      <Menu menu={menu} setMenu={setMenu}/>
      <header>
        <h1 className="day-of-the-week">{"" + today}</h1>
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
