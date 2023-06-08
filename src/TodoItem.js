import React, { useState } from "react";
import GptMessage from "./DangerMessage";
import { useTodosDispatchContext } from "./TodoContext";

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodosDispatchContext();

  let taskContent;
  let meanMessage;

  if (todo.isDue) {
    meanMessage = GptMessage();
  }

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
        <div class="btn-group" role="group" aria-label="simple buttons">
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

  return (
    <div className="row">
      <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">{todo.title}</h4>
      </div>

      <hr />
      <p>Todo #{todo.id + 1}</p>
      {taskContent}
      {meanMessage}
      <small>Due: {todo.date}</small>

      <div class="btn-group my-3" role="group" aria-label="simple buttons">
        <button className="btn btn-success">Completed</button>
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
