import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from '../../actions/todoAction';
import { Grid, Col, Row, Button } from 'react-bootstrap'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import CompletedTodos from './CompletedTodos';

class TodoList extends Component {
  componentDidMount() {
    //Dispatch an action
    this.props.getTodos();
  }

  render() {
    const todos = this.props.todos.map(todo => {
      console.log(todo)
      return (
        <Row xs={12} sm={6} md={4} key={todo._id}>
          <TodoItem 
            _id={todo._id}
            title={todo.title}
            text={todo.text}
            completed={todo.completed}
          />
        </Row>
      )
    })
    return (
     <Grid>
     <Row>
      <CompletedTodos />
     </Row>
      <Row style={{marginTop: '15px'}} >
        <Col xs={12} sm={6}>
          <TodoForm />
        </Col>
      </Row>
      {todos}
     </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getTodos}, dispatch)
}

//connect TodoList to store to provide access to todo props
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);