import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';

class TodoItem extends Component {
  render() {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h4>{this.props.title}</h4>
            <p>{this.props.text}</p>
            <Button bsStyle='primary'>Complete</Button>
            <Button bsStyle='danger' style={{marginLeft: '5px'}}>Delete</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

export default TodoItem;