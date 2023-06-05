import "./App.css";
import TodoContextProvider from "./TodoContext";
import TodoItemNew from "./TodoItemNew";
import TodoItemList from "./TodoItemList";

function App() {
  return (
    <div className="container">
      <TodoContextProvider>
        <TodoItemNew />
        <TodoItemList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
