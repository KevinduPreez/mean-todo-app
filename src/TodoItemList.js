import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

let nextId = 0;

let todayDate = new Date();

export default function List() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDue, setIsDue] = useState(Boolean);

  let dueDate = new Date(date);

  let dateCompare = () => {
    if (todayDate.getTime() >= dueDate.getTime()) {
      setIsDue(true);
    } else {
      setIsDue(false);
    }
  };

  // let successMessage = () => {
  //   return (
  //     <div class="alert alert-primary" role="alert">
  //       A simple primary alert—check it out!
  //     </div>
  //   );
  // };
  let dangerMessage = () => {
    return (
      <div class="alert alert-danger" role="alert">
        Get your shit together!
      </div>
    );
  };

  return (
    <>
      <h1>Todo Items:</h1>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
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
              { id: nextId++, name: title, date: date, isDue: isDue },
            ]);
            setIsDue(() => {
              if (todayDate.getTime() >= dueDate.getTime()) {
                return true;
              } else {
                return false;
              }
            });
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
            message={todo.isDue ? "" : dangerMessage()}
          />
        ))}
      </ul>
    </>
  );
}
