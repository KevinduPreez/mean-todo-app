import React from "react";
import GptMessage from "./DangerMessage";

export default function TodoItem({ isDue, title, date, message }) {
  return (
    <div className="card">
      <div className="card-body">
        <a href="/" className="card-link">
          Edit
        </a>

        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-1 text-body-secondary">{date}</h6>

        {message}

        {isDue ? <></> : GptMessage()}

        <a href="/" className="card-link">
          <button className="btn btn-success">Completed</button>
        </a>

        <a href="/" className="card-link">
          <button className="btn btn-danger">Delete</button>
        </a>
      </div>
    </div>
  );
}
