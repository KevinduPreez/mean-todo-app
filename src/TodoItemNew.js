import React from "react";
import { useState } from "react";
import { useTodosDispatchContext } from "./TodoContext";

let nextId = 0;
let todayDate = new Date();
let inputErrorStyleHandler = "1px solid #ced4da";

export default function TodoItemNew() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isDue, setIsDue] = useState(Boolean);
  const [chatComm, setChatComm] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const dispatch = useTodosDispatchContext();

  const screenWidth = window.innerWidth;

  if (screenWidth < 400) {
    return (
      <div className="row mb-3 mt-4 mb-4 container-fluid">
        <div className="col">
          <form>
            <input
              type="text"
              className="form-control"
              aria-label="Walk the duck"
              aria-describedby="new-submit-button"
              id="new-todo"
              placeholder="Walk the duck"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              style={{
                marginRight: "1em",
                border: inputErrorStyleHandler,
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
                    return false;
                  } else {
                    return true;
                  }
                });
              }}
              required
            />
          </form>
        </div>

        <div className="col">
          <button
            style={{
              fontWeight: "400",
              lineHeight: " 1.5",
              padding: "0.375rem 0.75rem",
              borderRadius: "0.375rem",
            }}
            type="submit"
            id="new-submit-button"
            className="btn btn-success w-100 h-100"
            onClick={() => {
              dispatch({
                type: "added",
                id: nextId++,
                title: title,
                date: date,
                isDue: isDue,
                isCompleted: isCompleted,
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
                  return false;
                } else {
                  return true;
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
                isCompleted: isCompleted,
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
