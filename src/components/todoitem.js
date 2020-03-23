import React from "react";
import Proptypes from "prop-types";

function ToDoItem(props) {
    return (
        <li className="list-group-item list-group-item-action" >
        <a href="#" key={props.pos} className="text-reset" 
        onClick={(e) => { props.completeToDo(props.pos) }}>
            {props.todo.label}
            {
                props.todo.done ?
                    (
                        <span className="badge badge-success">Ready</span>
                    ) : (
                        <span className="badge badge-warning">Not Ready</span>
                    )
            }

        </a >
        <i className="fa fa-trash float-right"
         onClick={() => props.handleClickTrash(props.pos)} ></i>
    </li>
    )
}

ToDoItem.propTypes = {
    todo: Proptypes.object.isRequired
}

export default ToDoItem