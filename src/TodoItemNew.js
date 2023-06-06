import React from "react";
import { useState, useContext } from "react";
import { TodoDispatchContext, useTodosDispatchContext } from "./TodoContext";

let nextId = 0;
let todayDate = new Date();

export default function TodoItemNew() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isDue, setIsDue] = useState(Boolean);
  const [chatComm, setChatComm] = useState("");

  const dispatch = useTodosDispatchContext();

  return (
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
        onChange={(e) => {
          setDate(e.target.value);
          setIsDue(() => {
            let t1 = todayDate.getTime();
            let t2 = new Date(e.target.value);
            if (t2.getTime() > t1) {
              console.log(isDue);
              return true;
            } else {
              console.log(isDue);
              return false;
            }
          });
        }}
      />

      <button
        type="button"
        id="new-submit-button"
        className="btn btn-primary"
        onClick={() => {
          dispatch({
            id: nextId++,
            title: title,
            date: date,
            isDue: isDue,
            chatComm: chatComm,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}
