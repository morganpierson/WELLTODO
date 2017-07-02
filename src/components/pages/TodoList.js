import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from '../../actions/todoAction';
import { Grid, Col, Row, Button } from 'react-bootstrap'

class TodoList extends Component {
  componentDidMount() {
    //Dispatch an action
    this.props.getTodos();
  }

  render() {
    const todos = this.props.todos.map(todo => {
      return (
        <div key={todo.id}>
          <h2>Title: {todo.title}</h2>
          <h2>Content: {todo.text}</h2>
          <h2>Completed: {todo.completed}</h2>
          <Button bsStyle='primary'>Do Something</Button>
        </div>
      )
    })
    return (
     <Grid>
      <Row style={{marginTop: '15px'}}>
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