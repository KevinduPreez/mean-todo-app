import React from "react";

export default function TodoItem({ title, date, message }) {
  return (
    <li k>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>

          {message}

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
    </li>
  );
}
