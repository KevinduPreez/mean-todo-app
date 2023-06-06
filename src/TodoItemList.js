import React from "react";
import TodoItem from "./TodoItem";
import { useTodosContext } from "./TodoContext";

export default function TodoItemList() {
  const todos = useTodosContext();

  return (
    <>
      <h2>Todo Items:</h2>

      <ul className="d-flex flex-wrap ">
        {todos.map((todo) => (
          <li key={todo.id} className="w-25 p-3">
            <TodoItem
              title={todo.title}
              date={todo.date}
              message={todo.chatComm}
              isDue={todo.isDue}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
