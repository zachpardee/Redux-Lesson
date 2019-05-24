import React, { Component } from "react";
import {connect} from "react-redux"
import {addTodo} from "../actions"

class AddTodoFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({text: value})
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.addTodo(Date.now(), this.state.text)
    this.setState({
      text: ''
    })
  }
  

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Add A Todo" onChange={this.handleChange}/>
          <button >Add Todo</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (id, text) => dispatch(addTodo(id, text))
})

export default connect(null, mapDispatchToProps) (AddTodoFormContainer)