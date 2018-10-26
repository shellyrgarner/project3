import React from "react";
import "./nav.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="#">CONVENE!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/conferences">Conferences</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/conferences/:id">Schedule</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signout">Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}