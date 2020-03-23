import React from 'react';
import TodoListItem from './TodoListItem';


const TodoList = ({ todos, onChangeLabelState, onHandleDelete }) => {
    return(
        <ul className="list-group todo-list">
            {
                todos.map( todo => {
                    const { id, label, ...itemProps } = todo;
                    return (
                        <li
                            className="list-group-item d-flex"
                            key={ id }
                        >
                            <TodoListItem
                                onChangeLabelState = { onChangeLabelState }
                                label = { label }
                                {...itemProps}
                            />
                            <div>
                                <button className="btn btn-outline-danger btn-sm"
                                    onClick={ () => onHandleDelete(label) }
                                >
                                    <i className="fa fa-trash-o"></i>
                                </button>
                                <button className="btn btn-outline-success btn-sm"
                                    onClick={ () => onChangeLabelState(label, 'important') }
                                >
                                    <i className="fa fa-exclamation"></i>
                                </button>
                            </div>
                        </li>
                    )}
                )
            }
        </ul>
    )
};

export default TodoList;