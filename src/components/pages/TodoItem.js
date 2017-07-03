import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom'
import { bindActionCreators } from 'redux';
import { addCompletedTodo } from '../../actions/completedTodosAction'
import { deleteTodo, toggleTodo, updateTodo } from '../../actions/todoAction';

class TodoItem extends Component {
  completeTodo() {
    const _id = this.props._id;
    const completed = this.props.completed
    const todo = [...this.props.todos, {
      _id: this.props._id,
      title: this.props.title,
      text: this.props.text,
      completed: this.props.completed
    }]
    console.log(todo)
    this.props.toggleTodo(_id, !completed)
  }

  render() {
    return (
      <Well ref='todo'>
        <Row>
          <Col xs={12}>
            <h4 
            style={{textDecoration: this.props.completed ? 'line-through' : 'none' }}>{this.props.title}</h4>
            <p style={{textDecoration: this.props.completed ? 'line-through' : 'none' }}>{this.props.text}</p>
            <Button 
            onClick={this.completeTodo.bind(this)}
            bsStyle='primary'>Mark as Complete</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    completedTodos: state.completedTodos.completedTodos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addCompletedTodo, deleteTodo, toggleTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);