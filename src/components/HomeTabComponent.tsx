import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function HomeTabComponent() {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="/home/america">America</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/home/europe">Europe</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/home/africa">Africa</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/home/asia">Asia</NavLink>
      </NavItem>
    </Nav>
  );
}
