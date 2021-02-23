import React from "react";
var uniqid = require("uniqid");

function Form( {setInputText, inputText, setTodos, todos}){
    function inputTextHandler(e){
        setInputText(e.target.value);
    };
    //function executes once subimt button is pressed
    //adds todo to state
    function submitTodoHandler(e){
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, id: uniqid('todo-id-'), completed: false},
        ]);
        setInputText('');
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">Today</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
            </div>
        </form>

    );
};

export default Form; 