import React from "react";
import Proptypes from "prop-types";
import ToDoItem from "./todoitem";

function ToDoList(props) {
    return (
        <div className="list-group">
        { 
            props.todos.map((elem, i) => {
                return (
                    <ToDoItem 
                    todo={elem}
                    key={i} 
                    handleClickTrash={props.handleClickTrash}
                    pos={i}
                    completeToDo={props.completeToDo}
                  />

                )
            })
        } 
        </div>

    )
}

ToDoList.propTypes = {
    todos: Proptypes.array.isRequired,
    handleClickTrash: Proptypes.func.isRequired
}

export default ToDoList


