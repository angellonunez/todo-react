import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

return (
    <li className="TodoItem">
        <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >
            <i className="fa-solid fa-circle-dot"></i>
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
        </p>
        <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
        >
            <i className="fa-solid fa-trash-can"></i>
        </span>
    </li>
);
}

export { TodoItem };