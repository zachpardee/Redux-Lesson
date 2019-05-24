import React from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <AddTodoForm />
    </div>
  );
}

export default App;
