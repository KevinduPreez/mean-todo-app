import React from "react";
import DangerMessage from "./DangerMessage";

export default function TodoItem({ isDue, title, date, message }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>

        {message}

        {isDue ? <></> : <>Due now</>}

        <a href="/" className="card-link">
          <button className="btn btn-success">Completed</button>
        </a>
        <a href="/" className="card-link">
          <button className="btn btn-info">Edit</button>
        </a>
        <a href="/" className="card-link">
          <button className="btn btn-danger">Delete</button>
        </a>
      </div>
    </div>
  );
}
