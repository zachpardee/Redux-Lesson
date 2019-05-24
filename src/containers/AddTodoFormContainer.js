import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodoFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(Date.now(), this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            placeholder="Add A Todo"
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: (id, text) => dispatch(addTodo(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoFormContainer);
