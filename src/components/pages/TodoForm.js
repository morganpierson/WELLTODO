import React, { Component } from 'react';
import { 
  Well, 
  FormControl, 
  Panel, 
  FormGroup, 
  ControlLabel, 
  Button 
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {findDOMNode} from 'react-dom';

import { postTodo, deleteTodo } from '../../actions/todoAction';

class TodoForm extends Component {
  handleSubmit() {
    //findDOMNode is the same as using this.refs.title.value
    let title = this.props.title
    const todo = [{
      title: findDOMNode(this.refs.title).value,
      text: findDOMNode(this.refs.text).value,
      completed: false
    }]
    let todoIndex = this.props.todos.findIndex(todo => {
      return title === todo.title
    })
    
      this.props.postTodo(todo)
      findDOMNode(this.refs.title).value = '';
      findDOMNode(this.refs.text).value = '';
    //call the postTodo action creator to be dispatched to our reducers onClick
    
  }

  onDelete() {
      let todoId = findDOMNode(this.refs.delete).value;

      this.props.deleteTodo(todoId)
    }


  render() {
    const listOfTodos = this.props.todos.map(todo => {
      return (
        <option key={todo._id}>{todo.title}</option>
      )
    })

    
    return( 
      <Well>
        <Panel>
          <FormGroup controlId='title'>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type='text'
              placeholder='Enter a title for this todo'
              ref='title'
            />  
          </FormGroup>
          <FormGroup controlId='text'>
            <ControlLabel>Details</ControlLabel>
            <FormControl
              type='text'
              placeholder='Enter some details for this todo'
              ref='text'
            />  
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle='primary'>Save Todo</Button>
        </Panel>
        <Panel>
          <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select a todo to delete</ControlLabel>
          <FormControl ref='delete' componentClass="select" placeholder="select">
            <option value="select">select</option>
            {listOfTodos}
          </FormControl>
        </FormGroup>
        <Button 
        onClick={this.onDelete.bind(this)}
        bsStyle='danger'>Delete</Button>
        </Panel>
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postTodo,deleteTodo}, dispatch)
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);