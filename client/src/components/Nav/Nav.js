import React from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap';
import logo from '../cv.png';
import "./nav.css";

 
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
          <NavbarBrand href="/"><img src={logo} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/login">Login/Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/conferences">Conferences</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/conferences/:id">Schedule</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signout">Sign Out</NavLink>
              </NavItem>
              </NavItem> */}

              {/* <NavItem>
                <NavLink href="/traveltips">Travel Tips</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/profile">Your Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/settings">Settings</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem >
                    <NavLink href="/">Sign Out</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}