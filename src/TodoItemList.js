import React from "react";
import TodoItem from "./TodoItem";
import { useTodosContext } from "./TodoContext";

export default function TodoItemList() {
  const todos = useTodosContext();
  const screenWidth = window.innerWidth;

  if (screenWidth < 400) {
    return (
      <>
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
