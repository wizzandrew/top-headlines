import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../css/HomeTabComponent.css";

export default function HomeTabComponent() {
  return (
    <Nav tabs className="homeTab">
      <div className="bannerHeading col-12">
        <h2>TOP HEADINGS</h2>
      </div>
      <NavItem>
        <NavLink href="/home/america">America</NavLink>
      </NavItem>
      <div className="tabVerticalLine"></div>
      <NavItem>
        <NavLink href="/home/europe">Europe</NavLink>
      </NavItem>
      <div className="tabVerticalLine"></div>
      <NavItem>
        <NavLink href="/home/africa">Africa</NavLink>
      </NavItem>
      <div className="tabVerticalLine"></div>
      <NavItem>
        <NavLink href="/home/asia">Asia</NavLink>
      </NavItem>
      <div className="tabVerticalLine"></div>
    </Nav>
  );
}
