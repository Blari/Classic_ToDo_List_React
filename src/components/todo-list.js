import React from "react";
import TodoListIteam from "./todo-list-iteam";

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListIteam label="Drenk Coffee" />
      </li>
      <li>
        <TodoListIteam label="Build React App" important />
      </li>
    </ul>
  );
};

export default TodoList;
