import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import commentCall from "./chat";

let nextId = 0;

let todayDate = new Date();

export default function List() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDue, setIsDue] = useState(Boolean);
  const [chatComm, setChatComm] = useState("");

  let dueDate = new Date(date);

  let dangerMessage = () => {
    return (
      <div className="alert alert-danger" role="alert">
        {chatComm}
      </div>
    );
  };

  return (
    <>
      <h1>Todo Items:</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Walk the duck"
          aria-describedby="new-submit-button"
          id="new-todo"
          placeholder="Walk the duck"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="new-todo-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          type="button"
          id="new-submit-button"
          className="btn btn-primary"
          onClick={() => {
            setTodos([
              ...todos,
              {
                id: nextId++,
                name: title,
                date: date,
                isDue: isDue,
                chatComm: chatComm,
              },
            ]);
            setIsDue(
              () => {
                if (todayDate.getTime() >= dueDate.getTime()) {
                  return true;
                } else {
                  return false;
                }
              },
              setChatComm(() => {
                if (isDue) {
                  return commentCall();
                }
              })
            );
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.name}
            date={todo.date}
            message={todo.isDue ? null : dangerMessage()}
          />
        ))}
      </ul>
    </>
  );
}
