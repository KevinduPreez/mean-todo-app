import React, { useState } from "react";
import GptMessage from "./DangerMessage";
import { useTodosDispatchContext } from "./TodoContext";
import GptSuccessMessage from "./CompletedMessage";

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [done, setDone] = useState(false);
  const dispatch = useTodosDispatchContext();

  let taskContent;
  let style;
  let buttonStyle;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          className="form-control"
          defaultValue={todo.title}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: {
                ...todo,
                title: e.target.value,
              },
            });
          }}
        />
        <div className="btn-group" role="group" aria-label="simple buttons">
          <button
            className="btn btn-success my-3"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="btn btn-warning my-3"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      </>
    );
  }

  if (done) {
    style = "alert alert-success";
    buttonStyle = "d-none";
  }

  return (
    <div className={"row" + done ? style : ""}>
      <div className="d-flex w-100 justify-content-between">
        <h4 className="mb-1 d-inline">{todo.title}</h4>
        <button
          type="button"
          className={done ? "btn-close d-inline" : "d-none"}
          aria-label="Close"
          onClick={() => {
            dispatch({
              type: "deleted",
              id: todo.id,
            });
          }}
        ></button>
      </div>

      <hr />
      <p>Todo #{todo.id + 1}</p>
      {taskContent}
      <div className={done ? "d-none" : ""}>
        {todo.isDue ? GptMessage() : ""}
      </div>
      <small>Due: {todo.date}</small>

      <div
        className={"btn-group " + done ? buttonStyle : "my-3"}
        role="group"
        aria-label="simple buttons"
      >
        <button
          className="btn btn-success"
          onClick={() => {
            setDone(true);
            dispatch({
              type: "success",
              todo: {
                ...todo,
                isCompleted: true,
              },
            });
          }}
        >
          Completed
        </button>

        <button
          className="btn btn-info"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            //console.log(todo.id);
            dispatch({
              type: "deleted",
              id: todo.id,
            });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
