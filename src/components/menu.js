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
      <Nav>
        <NavItem eventKey={1} href="/about">About the Developer</NavItem>
        <NavItem eventKey={2} href="/conact">Contact</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/admin">Admin</NavItem>
        <NavItem eventKey={2} href="/cart">Your cart</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}

export default Menu;