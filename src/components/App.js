import React from "react";
import AddTodoFormContainer from "../containers/AddTodoFormContainer";
import TodosContainer from '../containers/TodosContainer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <AddTodoFormContainer />
      <TodosContainer/>
    </div>
  );
}

export default App;
