import React from "react";






function Todo({todos, setTodos, todoText, todo}){

    function deleteHandler(e){
        setTodos(todos.filter(element => element.id !== todo.id));
    };
    
    function completedHandler(){
        console.log("completed");
    };

    return(
        <div className={`todo`}>
            <li className="todo-item">{todoText}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );

};


export default Todo;