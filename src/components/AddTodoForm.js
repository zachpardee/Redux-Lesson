import React, { Component } from "react";

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <section>
        <form>
          <input placeholder="Add A Todo" />
          <button>Add Todo</button>
        </form>
      </section>
    );
  }
}

export default AddTodoForm;
