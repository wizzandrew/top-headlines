import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

type DropdownProps = {
  title: string;
  options: { id: string; name: string }[];
  // setCurrentOption: React.Dispatch<
  //   React.SetStateAction<{
  //     id: string;
  //     name: string;
  //   }>
  // >;
  loadNews: (source: string) => Promise<void>;
};

export default function TabDropDownMenuComponent(props: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  // Function to handle selection of an option
  // It is meant to also trigger fetch request
  // const handleOptionChange = (option: { id: string; name: string }) => {
  //   props.setCurrentOption(option);
  //   props.loadNews();
  // };

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
                  onClick={(e) => props.loadNews(option.id)}
                >
                  {option.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}