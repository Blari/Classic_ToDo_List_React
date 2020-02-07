import React from "react";
import TodoListItem from "../todo-list-item/todo-list-iteam";
import './todo-list.css'

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item)=>{

        const { id, ...otherItems } = item;

        return(
            <li key={id} className="list-group-item">
                <TodoListItem {...otherItems}
                onDeleted={() => onDeleted(id)}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
           { elements }
        </ul>
    );
};

export default TodoList;
