import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { FaBars, FaRegUserCircle } from "react-icons/fa";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Fragment>
        <nav
          id="topbar"
          className="topbar navbar navbar-expand navbar-light bg-white  mb-4 static-top shadow d-flex justify-content-between px-3"
        >
          <div
            className="sidebars-button text-dark mr-auto"
            onClick={this.props.handleToggle}
          >
            <FaBars />
            <div
              className={this.props.isActive ? "dashboard" : "dashboard-show"}
            >
              Daily Planner
            </div>
          </div>

          <Navbar light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Ad Activity</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/notes">Notes</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    <FaRegUserCircle />
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Account</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          {/* <div className="account ">
            <div className="dateshow">
              {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
                day: "numeric",
                month: "long",
                weekday: "long",
                year: "numeric",
              }).format(Date.now())}
            </div>
            <div className="datehide">
              {new Intl.DateTimeFormat("bn-BD-u-ca-islamic", {
                day: "numeric",
                month: "long",
                weekday: "long",
                // year: "numeric",
              }).format(Date.now())}
            </div>
          </div> */}
        </nav>
      </Fragment>
    );
  }
}
