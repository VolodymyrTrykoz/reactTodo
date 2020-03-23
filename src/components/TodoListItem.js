import React from 'react';
import cx from 'classnames'

export default function TodoListItem ({ label, done, onChangeLabelState, important }) {
    return (
        <span className={ cx({
            'todo-list-item': true,
            'done' : done,
            'important': important
        }) }
            onClick={ () => onChangeLabelState(label, 'done') }
        >
            <span className="todo-list-item-label">
                { label }
            </span>
        </span>
    )
};

