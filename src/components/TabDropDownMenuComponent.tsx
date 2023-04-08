import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../css/SourceDropdown.css";

type DropdownProps = {
  title: string;
  options: { id: string; name: string }[];
  loadNews: (source: string) => Promise<void>;
};

export default function TabDropDownMenuComponent(props: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="d-flex">
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        className="sourceDropdown"
      >
        <DropdownToggle caret>{props.title}</DropdownToggle>
        <DropdownMenu>
          {props.options.map((option, index) => {
            return (
              <DropdownItem
                key={index}
                onClick={(e) => props.loadNews(option.id)}
              >
                {option.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
