import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button, Panel, Well, ButtonGroup, Label } from 'react-bootstrap';

class CompletedTodos extends Component {
  renderEmpty() {
    return <div></div>
  }

  renderList() {
    const completedTodosList = this.props.completedTodos.map(todo => {
      return (
        <Panel key={todo._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h4 style={{textDecoration: 'line-through'}}>{todo.title}</h4><span>    </span>
            </Col>
          </Row>
        </Panel>
      )
    })

    return (
      <Panel header='Completed-Todos' bsStyle='primary'>
        {completedTodosList}
      </Panel>
    )
  }

  render() {
    if(this.props.completedTodos[0]){
      return this.renderList()
    } else {
      return this.renderEmpty()
    }
  }
}

function MapStateToProps(state) {
  return {
    completedTodos: state.completedTodos.completedTodos
  }
}

export default connect(MapStateToProps)(CompletedTodos);