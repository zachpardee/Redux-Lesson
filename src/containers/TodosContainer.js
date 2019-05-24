import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { toggleTodo } from "../actions";

const TodosContainer = props => {
  let todos = this.props.todos.map(todo => (
    <TodoItem key={todo.id} {...todo} toggleTodo={this.props.toggleTodo} />
  ));
  return <div>{todos}</div>;
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
