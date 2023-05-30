import "./App.css";
import { useState } from "react";
import TodoItemList from "./TodoItemList";

function App() {
  return (
    <div className="container">
      <TodoItemList />
    </div>
  );
}

export default App;
