import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext, useTodosContext } from "./TodoContext";

export default function TodoItemList() {
  const todos = useTodosContext();

  return (
    <>
      <h1>Todo Items:</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
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
