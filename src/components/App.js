import React from "react";
import AddTodoFormContainer from "../containers/AddTodoFormContainer";
import TodosContainers from "../containers/TodosContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <AddTodoFormContainer />
      <TodosContainers />
    </div>
  );
}

export default App;
