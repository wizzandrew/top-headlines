import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../css/Header.css";
import brandIcon from "../img/brand.svg";
import accountIcon from "../img/account-icon.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="container">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src={brandIcon} alt="brand" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <div className="signInHolder">
            <a href="#">
              <img className="accountIcon" src={accountIcon} alt="account" />
              <p>Sign in</p>
            </a>
          </div>
          <div className="verticalLine"></div>
          <Nav className="navHolder me-auto" navbar>
            <NavItem>
              <NavLink href="/world">World</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/business">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/entertainment">Entertainment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/health">Health</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tech">Tech</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sports">Sports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/science">Science</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
