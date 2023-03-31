import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

type DropdownProps = {
  title: string;
  options: string[];
  setCurrentOption: React.Dispatch<React.SetStateAction<string>>;
};

export default function TabDropDownMenuComponent(props: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="container">
      <div className="d-flex">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>{props.title}</DropdownToggle>
          <DropdownMenu>
            {props.options.map((option, index) => {
              return (
                <DropdownItem
                  key={index}
                  onClick={(e) => props.setCurrentOption(option)}
                >
                  {option}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
