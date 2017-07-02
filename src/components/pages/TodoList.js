import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from '../../actions/todoAction';
import { Grid, Col, Row, Button } from 'react-bootstrap'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

class TodoList extends Component {
  componentDidMount() {
    //Dispatch an action
    this.props.getTodos();
  }

  render() {
    const todos = this.props.todos.map(todo => {
      return (
        <Col xs={12} sm={6} md={4} key={todo.id}>
          <TodoItem 
            id={todo.id}
            title={todo.title}
            text={todo.text}
            completed={todo.completed}
          />
        </Col>
      )
    })
    return (
     <Grid>
      <Row style={{marginTop: '15px'}}>
        <Col xs={12} sm={6}>
          <TodoForm />
        </Col>
        {todos}
      </Row>
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