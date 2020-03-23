import React from 'react';

export default function AddTodo({ onSubmit, onInputChange, newTaskTodo }) {
    return(
        <form className="item-add-form d-flex"
            onSubmit={ (e) => onSubmit(e) }
        >
            <input type="text"
                   placeholder="Add new item..."
                   className="form-control"
                   value={ newTaskTodo }
                   onChange={ (e) => onInputChange(e) }
            />
            <button className="btn btn-outline-secondary">
                Add item
            </button>
        </form>
    )
}