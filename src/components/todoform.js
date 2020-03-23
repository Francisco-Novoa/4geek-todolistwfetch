import React from "react"
import Proptypes from "prop-types";

const ToDoForm = props => {

    return (
    <div className="input-group mb-2">
        <div className="input-group-prepend">
            <select className="custom-form" name="done" onChange={props.handleChange} >
                <option value="">Done</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </div>
        <input
            type="text"
            name="label"
            className="form-control"
            placeholder="Inserte la tarea aqui..."
            onKeyDown={props.handleKeyDown}
        />
    </div>
    )
}



ToDoForm.propTypes={
    handleKeyDown:Proptypes.func.isRequired,
    handleChange:Proptypes.func.isRequired

}

export default ToDoForm