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

  const newFormSubmit = () => {};

  const screenWidth = window.innerWidth;

  if (screenWidth < 400) {
    return (
      <div className="row mb-3 mt-4 mb-4 container-fluid">
        <div className="col">
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
            style={{
              marginRight: "1em",
              border: "1px solid #ced4da",
              fontWeight: "400",
              lineHeight: " 1.5",
              padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
            }}
            className="w-100 my-1"
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
        </div>

        <div className="col">
          <button
            style={{
              fontWeight: "400",
              lineHeight: " 1.5",
              padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
            }}
            type="button"
            id="new-submit-button"
            className="btn btn-success w-100 h-100"
            onClick={() => {
              dispatch({
                type: "added",
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
      </div>
    );
  } else {
    return (
      <div className="row mb-3 mt-4 mb-4">
        <div class="col">
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
        </div>

        <div className="col">
          <input
            style={{
              marginRight: "1em",
              border: "1px solid #ced4da",
              fontWeight: "400",
              lineHeight: " 1.5",
              padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
            }}
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
            style={{
              fontWeight: "400",
              lineHeight: " 1.5",
              padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
            }}
            type="button"
            id="new-submit-button"
            className="btn btn-success"
            onClick={() => {
              dispatch({
                type: "added",
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
      </div>
    );
  }
}
