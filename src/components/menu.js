import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';


class Menu extends Component {
  render() {
    return(
      <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">WELL TODO</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/admin">About the Developer</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}

export default Menu;