import React, { useState } from "react";

function Todo({todos, setTodos, todoText, todo}){
    const [isDeleted, setIsDeleted] = useState(false);

    function deleteHandler(e){
        setIsDeleted(true);
        //use setTimeout so use can see the animation when fall class is added 
        setTimeout(() => {setTodos(todos.filter(element => element.id !== todo.id));}, 500);
    };
    
    function completedHandler(){
        console.log("completed");
    };

    return(
        <div className={`todo ${isDeleted ? "fall": ""}`}>
            <li className={`todo-item`}>{todoText}</li>
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