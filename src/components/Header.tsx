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
import SignInModal from "./SignInModal";
import SearchBarComponent from "./SearchBarComponent";
import brandIcon from "../img/brand.svg";
import accountIcon from "../img/account-icon.svg";
import "../css/Header.css";

export default function Header() {
  // state for collapsed(mobile) header view
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  // state for sign in modal
  const [modalOpen, setModal] = useState(false);
  const triggerModal = () => {
    setModal(!modalOpen);
  };

  return (
    <div className="container">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src={brandIcon} alt="brand" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <div className="signInHolder" onClick={triggerModal}>
            <a href="signin">
              <img className="accountIcon" src={accountIcon} alt="account" />
              <p>Sign in</p>
            </a>
          </div>
          <div className="verticalLine"></div>
          <Nav className="navHolder" navbar>
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
          <div className="searchHolder">
            <SearchBarComponent />
          </div>
        </Collapse>
      </Navbar>
      <SignInModal modalOpen={modalOpen} toggle={triggerModal} />
    </div>
  );
}
