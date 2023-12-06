import React from 'react';

export function ToDoItem ( props ) {
    const { className = "", status = "", children } = props;

    function classNames () {
        let temp = [];
        className && temp.push( className );
        status && temp.push( status );
        return temp.join( " " );
    }

    return (
        <li className={ classNames() }>
            { children }
        </li>
    )
}

export default function ToDoList ( props ) {
    const { className = "", children } = props;

    return (
        <ul className={ "simple-todo-list " + className }>
            { children }
        </ul>
    )
}