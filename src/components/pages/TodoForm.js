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

import { postTodo } from '../../actions/todoAction';

class TodoForm extends Component {
  handleSubmit() {
    //findDOMNode is the same as using this.refs.title.value
    const todo = [{
      title: findDOMNode(this.refs.title).value,
      text: findDOMNode(this.refs.text).value,
      completed: false
    }]
    //call the postTodo action creator to be dispatched to our reducers onClick
    this.props.postTodo(todo)
  }

  render() {
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
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postTodo}, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoForm);