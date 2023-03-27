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

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Top Headlines</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="me-auto" navbar>
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
